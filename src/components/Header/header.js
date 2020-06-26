import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "./use-window-size"
import { StyledHeader, HeaderContainer, HeadLinePackage, BarPackage } from "../StyledComponents/Header/headercomponents"
import "../StyledComponents/Header/header.css"

const Header = ({ links = [] }) => {
  const data = useStaticQuery(graphql`
  query {
    bkgImage_big: file(relativePath: { eq: "MenuBackground_big.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bkgImage_small: file(relativePath: { eq: "MenuBackground_small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

const { width } = useWindowSize()

const small = width < 730
const middle = width >= 730 && width < 900
const big = width >= 900

return (
  <StyledHeader>
    <HeaderContainer>
      <HeadLinePackage fluid={big ? data.bkgImage_big.childImageSharp.fluid :  data.bkgImage_small.childImageSharp.fluid} isBig={big} />
      <BarPackage isBig={big} isMiddle={middle} isSmall={small} links={links} />
    </HeaderContainer>
  </StyledHeader>
  )
}

export default Header