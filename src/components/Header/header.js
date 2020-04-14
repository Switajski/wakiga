import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"
import useWindowSize from "./use-window-size"
import NavDesktop from "./nav-desktop"
import NavMobile from "./nav-mobile"

const Small = ({ children }) => (
  <>
    <span style={{ fontSize: "0.7em" }}>{children}</span>
    <br />
  </>
)

const Header = ({ links = [] }) => {
  const { width } = useWindowSize()

  const small = width < 600
  const middle = width > 600 && width < 899
  const big = width > 900

  return (
    <header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0.8rem 1.0875rem`,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "auto" }}>
          <h1 style={{ margin: 0 }}>
            <Link to="/">
              {big ? "Waldkindergarten " : <Small>Waldkindergarten</Small>}
              Wiesenttal
            </Link>
          </h1>
        </div>
        {(big || middle) && <NavDesktop links={links} />}
        {small && <NavMobile links={links} />}
      </div>
    </header>
  )
}

export default Header
