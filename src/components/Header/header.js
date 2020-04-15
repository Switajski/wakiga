import { Link } from "gatsby"
import React from "react"

import "./header.css"
import useWindowSize from "./use-window-size"
import NavDesktop from "./nav-desktop"
import NavMobile from "./nav-mobile"

const AdjustedWidth = ({ relative, anchor }) => (
  <div>
    <svg viewBox="0 -30 338 40">
      <text x="0" y="0">
        {relative}
      </text>
    </svg>
    {anchor}
  </div>
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
              {big ? (
                "Waldkindergarten Wiesenttal"
              ) : (
                <AdjustedWidth relative="Waldkindergarten" anchor="Wiesenttal" />
              )}
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
