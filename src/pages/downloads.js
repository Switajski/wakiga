import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';
import styled from "styled-components"

const IconContainer = styled.p`
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

const Downloads = () => {
  const data = useStaticQuery(graphql`
  query {
    konzept: file(relativePath: { eq: "Konzeption Wakiga Plankenfels.pdf" }) {
      publicURL
    }
  }
`)

return (<Layout>
    <SEO title="Downloads" />
    <h3>Unser Konzept</h3>
    <p>Unser Konzept verdeutlicht unsere Ziele und soll unseren Schwerpunkt in der Pädagogik sichtbar machen. Hier könnt Ihr das Konzept als PDF herunterladen:</p>
    <IconContainer>
      <a href={data.konzept.publicURL} download>
        <StyledFileDownload title="Konzept herunterladen" />
      </a>
    </IconContainer>
    <h3>Absichtserklärung etc.</h3>
    <p>Absichtserklärung, Info-Broschüre / Flyer, Satzung des Vereins, Abholberechtigung findet Ihr auf der Download-Seite des Vereins:</p> 
    <IconContainer>
      <a href="http://www.waldkindergarten-wiesenttal.de/downloads.php">
        <StyledExtLink title="Zur Download-Seite des Vereins" />
      </a>
    </IconContainer>
  </Layout>
)}
export default Downloads