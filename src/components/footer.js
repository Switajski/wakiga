import React from "react"
import PropTypes from "prop-types"

import TextBreaker from "./text-breaker"
import logo from "../images/logo.gif"
import { Link } from "gatsby"

const Footer = ({ address }) => {
  return (
    <footer style={{ margin: "1rem auto", borderWidth: "medium", borderStyle: "outset", borderColor: "white", verticalAlign: "center"}}>
      <div style={{ display: "flex", fontSize: "80%", lineHeight: "110%", marginTop: "2em", padding: "0.5rem", verticalAlign: "center" }}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <TextBreaker>{address}</TextBreaker>
          <br />
          <Link to="/impressum/">Impressum</Link>
          <br />
          <Link to="/datenschutz/">Datenschutz</Link>
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <a href="http://www.waldkindergarten-wiesenttal.de" title="Zum Verein">
          <img src={logo} alt="Waldkindergarten Wiesenttal e.V." />
        </a>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <TextBreaker>
            {`"Waldhandy": TBD 
              MO - FR 8 - 14:30 Uhr

              Telefon Büro Verein: 09196 - 99 84 66
              Fax: 09196 - 99 84 59 
              Di & Do 8 - 12 Uhr`}
          </TextBreaker>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer