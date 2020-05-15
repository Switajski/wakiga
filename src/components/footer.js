import React from "react"
import PropTypes from "prop-types"

import TextBreaker from "./text-breaker"
import logo from "../images/logo.gif"
import { Link } from "gatsby"
import FaceBookIcon from "../images/FindUs-FB-RGB.svg"
import EmailIcon from "../images/Email-Icon.png"

/* borderWidth: "medium", borderStyle: "outset", borderColor: "white", */
const Footer = ({ address }) => {
  return (
    <footer style={{ margin: "2rem auto",  backgroundColor: "#004225" }}>
      <div style={{ display: "flex", fontSize: "80%", lineHeight: "110%", padding: "0.5rem" }}>
        <div style={{ width: "100%", textAlign: "center", marginTop: "2.8em" }}>
          <div>
            <TextBreaker>{address}</TextBreaker>
          </div>
          <div style={{ marginTop: "1.45em" }}>
            <Link to="/impressum/">Impressum</Link>
          </div>
          <div style={{ marginTop: "0.3em" }}>
            <Link to="/datenschutz/">Datenschutz</Link>
          </div>
          <div style={{ marginTop: "1.45em" }}>
            <a href="https://www.facebook.com/waldkiga.plankenfels/" title="Find us on Facebook">
              <FaceBookIcon style={{width: "7rem"}} />
            </a>
          </div>          
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2.0em" }}>
          <a href="http://www.waldkindergarten-wiesenttal.de" title="Zum Verein">
            <img src={logo} alt="Waldkindergarten Wiesenttal e.V." />
          </a>
        </div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "2.8em" }}>
          <TextBreaker>
            {`"Waldhandy": TBD 
              MO - FR 8 - 14:30 Uhr`}
          </TextBreaker>
          <div>
            <a href="mailto:info@waldkindergarten-wiesenttal.de" title="Email an uns">
              <img src={EmailIcon} alt="Email" style={{marginBottom: "0.725rem", marginTop: "0.725rem", width: "2.5rem"}}/>
            </a>
          </div>
          <TextBreaker>
              {`Telefon Büro Verein: 09196 - 99 84 66
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