import React from "react"

import TextBreaker from "./text-breaker"
import logo from "../images/logo.gif"
import { Link } from "gatsby"
import FaceBookIcon from "../images/FindUs-FB-RGB.svg"
import EmailIcon from "../images/Email-Icon.png"

/* borderWidth: "medium", borderStyle: "outset", borderColor: "white", */
const Footer = ({ address }) => {
  return (
    <footer style={{ margin: "2rem auto",  backgroundColor: "RGB(197, 224, 180)", height: "auto" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "80%", lineHeight: "115%", padding: "1rem" }}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <div>
            <TextBreaker>{address}</TextBreaker>
          </div>
          <div style={{ marginTop: "1.45em" }}>
            <TextBreaker>
              {`Telefon Büro Verein: 09196 - 998466
              Di & Do 08 - 12 Uhr`}
            </TextBreaker>
          </div>
          <div style={{ marginTop: "1.45em" }}>
            <Link to="/impressum/">Impressum</Link>
          </div>
          <div style={{ marginTop: "0.3em" }}>
            <Link to="/datenschutz/">Datenschutz</Link>
          </div>
        </div>
        <div style={{ margin: "0 auto", padding: "0.5rem", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", verticalAlign: "middle" }}>
          <a href="http://www.waldkindergarten-wiesenttal.de" title="Zum Verein">
            <img src={logo} alt="Waldkindergarten Wiesenttal e.V." style={{ marginBottom: "0" }}/>
          </a>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <TextBreaker>
            {`"Waldhandy": TBD 
              Mo - Fr 8 - 14:30 Uhr`}
          </TextBreaker>
          <div style={{ marginTop: "1.45em", marginBottom: "0" }}>
            <a style={{ marginTop: "1.45em", marginBottom: "0" }} href="mailto:info@waldkindergarten-plankenfels.de" title="Email an uns">
              <img src={EmailIcon} alt="E-Mail" style={{ width: "2.5rem", marginBottom: "0" }}/>
            </a>
          </div>
          <div style={{ marginTop: "1.45em" }}>
            <a href="https://www.facebook.com/waldkiga.plankenfels/" title="Find us on Facebook">
              <FaceBookIcon style={{width: "7rem"}} />
            </a>
          </div>          
        </div>
      </div>
    </footer>
  )
}

export default Footer