import React from "react"
import TextBreaker from "./text-breaker"
import logo from "../images/logo.gif"
import { Link } from "gatsby"
import FaceBookIcon from "../images/FindUs-FB-RGB.svg"
import EmailIcon from "../images/Email-Icon.png"
import styled from "styled-components"

const StyledFooter = styled.footer`
  margin: 2rem auto;
  background-color: RGB(197, 224, 180);
  height: auto;
`
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  line-height: 115%;
  padding: 1rem;
`
const LeftColumn = styled.div`
  width: 100%;
  text-align: center;
`
const PhoneArea = styled.div`
  margin-top: 1.45em;
  margin-bottom: 1.45em;
`
const DatenschutzArea = styled.div`
  margin-top: 0.3em;
`
const LogoContainer = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`
const Logo = styled.img`
  margin-bottom: 0;
`
const RightColumn = styled.div`
  width: 100%;
  text-align: center;
`
const MailIconContainer = styled.div`
  margin-top: 1.45em;
  margin-bottom: 1.45em;
`
const MailIcon = styled.img`
  width: 2.5rem;
  margin-bottom: 0;
`
const StyledFaceBookIcon = styled(FaceBookIcon)`
  width: 7rem;
`
const LeftColumnPackage = (props) => (
  <LeftColumn>
    <div>
      <TextBreaker>{props.address}</TextBreaker>
    </div>
    <PhoneArea>
      <TextBreaker>
        {`Telefon Büro Verein: 09196 - 998466
        Di & Do 08 - 12 Uhr`}
      </TextBreaker>
    </PhoneArea>
    <div>
      <Link to="/impressum/">Impressum</Link>
    </div>
    <DatenschutzArea>
      <Link to="/datenschutz/">Datenschutz</Link>
    </DatenschutzArea>
  </LeftColumn>
)

const RightColumnPackage = (props) => (
  <RightColumn>
    <TextBreaker>
      {`"Waldhandy": 0176-42087893 
        Mo - Fr 08 - 14.30 Uhr`}
    </TextBreaker>
    <MailIconContainer>
      <a href="mailto:info@waldkindergarten-plankenfels.de" title="Email an uns">
        <MailIcon src={props.EmailIcon} alt="E-Mail" />
      </a>
    </MailIconContainer>
    <div>
      <a href="https://www.facebook.com/waldkiga.plankenfels/" title="Find us on Facebook">
        <StyledFaceBookIcon />
      </a>
    </div>          
  </RightColumn>
)
const Footer = ({ address }) => {
  return (
    <StyledFooter>
      <FooterContainer>
        <LeftColumnPackage address={address} />
        <LogoContainer>
          <a href="http://www.waldkindergarten-wiesenttal.de" title="Zum Verein">
            <Logo src={logo} alt="Waldkindergarten Wiesenttal e.V."/>
          </a>
        </LogoContainer>
        <RightColumnPackage EmailIcon={EmailIcon} />
      </FooterContainer>
    </StyledFooter>
  )
}

export default Footer