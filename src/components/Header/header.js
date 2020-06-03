import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

import useWindowSize from "./use-window-size"
import NavDesktop from "./nav-desktop"
import NavMobile from "./nav-mobile"
import BackgroundImage from "gatsby-background-image"
import "./header.css"


const AdjustedWidth = ({ relative, anchor }) => (
  <div>
    {relative}
    <svg viewBox="0 -30 338 40">
      <text x="70" y="0">
      {anchor}
      </text>
    </svg>
 </div>
)

const Header = ({ links = [] }) => {
  const data = useStaticQuery(graphql`
  query {
    bkgImage: file(relativePath: { eq: "MenuBackground2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

  const { width } = useWindowSize()

  const small = width < 600
  const middle = width > 600 && width < 899
  const big = width > 900

  return (
    <header>
      <div style={{ width: "100%", height: "100%", display: "relative" }}>
        <BackgroundImage fluid={data.bkgImage.childImageSharp.fluid} style={{ height: "85%" }}>
          <div style={{ margin: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <h1>
              <Link to="/">
                {big ? (
                  "Waldkindergarten Plankenfels"
                ) : (
                  <AdjustedWidth relative="Waldkindergarten" anchor="Plankenfels" />
                )}
              </Link>
            </h1>
          </div>          
        </BackgroundImage>
        <div className="bar" style={{ height: "15%" }} >
          {(big || middle) && 
            <div className="navigation" style={{ height: "100%" }}>
              <NavDesktop links={links} />
            </div> 
          }
          {small && 
            <div className="navigation">
              <NavMobile links={links} />
            </div>
          }
        </div>
      </div>
    </header>
  )
}

export default Header