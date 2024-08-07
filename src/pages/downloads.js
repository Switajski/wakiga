import React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { FaFileDownload, FaExternalLinkAlt } from "react-icons/fa"
import styled from "styled-components"

const IconContainer = styled.div`
  text-align: center;
`
const StyledFileDownload = styled(FaFileDownload)`
  color: RGB(30,140,190);
  height: 3em;
  width: 3em;
`
const StyledExtLink = styled(FaExternalLinkAlt)`
  color: RGB(30,140,190);
  height: 3em;
  width: 3em;
`
const StyledInfo = styled.p`
  font-size: 85%;
`

const FileDownloadWithInfo = (props) => (
  <div>
    <a href={props.publicURL} download>
      <StyledFileDownload title={props.title} />
    </a>
    <StyledInfo>{props.title}</StyledInfo>
  </div>
)
const ExtLinkWithInfo = (props) => (
  <div>
    <a href={props.publicURL}>
      <StyledExtLink title={props.title} />
    </a>
    <StyledInfo>{props.title}</StyledInfo>
  </div>
)

const Downloads = () => {
  const data = useStaticQuery(graphql`
  query {
    konzept: file(relativePath: { eq: "Konzeption Waldkiga Plankenfels.pdf" }) {
      publicURL
    }
    kontaktdaten: file(relativePath: { eq: "Kontaktdaten.pdf" }) {
      publicURL
    }
  }
`)

return (<Layout>
    <h3>Unser pädagogisches Konzept</h3>
    <p>Unser pädagogisches Konzept verdeutlicht unsere Ziele und soll unseren Schwerpunkt in der Pädagogik sichtbar machen. Hier könnt Ihr das Konzept als PDF herunterladen:</p>
    <IconContainer>
      <FileDownloadWithInfo publicURL={data.konzept.publicURL} title="Konzept (PDF) herunterladen" />
    </IconContainer>
    <h3>Absichtserklärung etc.</h3>
    <p>Absichtserklärung, Info-Broschüre / Flyer, Satzung des Vereins, Abholberechtigung findet Ihr auf der Download-Seite des Vereins:</p> 
    <IconContainer>
      <ExtLinkWithInfo publicURL="http://www.waldkindergarten-wiesenttal.de/downloads.php" title="Download-Seite des Vereins" />
    </IconContainer>
  </Layout>
)}

export default Downloads

export const Head = () => (
  <Seo title="Downloads" />
)