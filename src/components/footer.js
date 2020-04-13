import React from "react"
import PropTypes from "prop-types"

import TextBreaker from "./text-breaker"
import logo from "../images/logo.gif"
import { Link } from "gatsby"


const Footer = ({ address }) => {
  return (
    <footer>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "auto" }}>
          <img src={logo} />
        </div>
        <div>
          <TextBreaker>{address}</TextBreaker>
          <br />
          <Link to="/impressum/">Impressum</Link>
          <br />
          <Link to="/datenschutz/">Datenschutz</Link>
        </div>
        <div>
          <TextBreaker>
            {`"Waldhandy": 0160 - 625 06 40 
              MO - FR 8 - 14:30 Uhr

              Telefon Büro: 09196 - 99 84 66
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
