import React from "react"
import PropTypes from "prop-types"

import TextBreaker from "./text-breaker"
import logo from "../images/logo.gif"
import { Link } from "gatsby"


const Footer = ({ address }) => {
  return (
    <footer>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <img src={logo} alt="Waldkindergarten Wiesenttal e.V."/>
        </div>
        <div style={{ marginRight: "10px" }}>
          <TextBreaker>{address}</TextBreaker>
          <br />
          <a href="http://www.waldkindergarten-wiesenttal.de">Verein</a>
          <br />
          <Link to="/impressum/">Impressum</Link>
          <br />
          <Link to="/datenschutz/">Datenschutz</Link>
        </div>
        <div>
          <TextBreaker>
            {`Anmeldungen und Fragen an:
              Philipp Schwegel (Elterninitiative)
              eMail: philipp.schwegel@googlemail.com
              Telefon: 0179/3286326

              "Waldhandy": TBD 
              MO - FR 8 - 14:30 Uhr

              Telefon Büro Verein: 09196 - 99 84 66
              Fax: 09196 - 99 84 59 
              DI & DO 8 - 12 Uhr`}
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
