import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "./use-window-size"
import { HeadLinePackage, BarPackage, StyledHeader } from "../StyledComponents/Header/headercomponents"
import "../StyledComponents/Header/header.css"
import { getImage } from "gatsby-plugin-image"

const Header = ({ links = [] }) => {
  const data = useStaticQuery(graphql`
  query {
    desktopBackgroundImage: file(relativePath: { eq: "MenuBackground_big.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          layout: FULL_WIDTH
          quality: 85
        )
      }
    }
    overlayLogo: file(relativePath: { eq: "Waldkindergarten_Logo.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          layout: FULL_WIDTH
          quality: 85
        )
      }
    }
  }
`)

const { width } = useWindowSize()
const big = width >= 900

const bkgImage = getImage(data.desktopBackgroundImage)
const overlayLogoImage = getImage(data.overlayLogo)

return (
  <StyledHeader>
    <HeadLinePackage image={bkgImage} logo={overlayLogoImage} />
    <BarPackage isBig={big} links={links} />
  </StyledHeader>
  )
}

export default Header