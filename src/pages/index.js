import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

function createMarkup(htmlString) {
  return {__html: htmlString};
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "Platz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    index: docx(name: {eq: "Index"}) {
      content
    }
  }
`)

return(
  <Layout>
    <SEO title="Home" />
    <div dangerouslySetInnerHTML={createMarkup(data.index.content)}></div>
    <div style={{ marginBottom: `10px` }}>
      <Img style={{ margin: "0 auto" }}
           fluid={data.placeholderImage.childImageSharp.fluid}/>
           <p style={{ textAlign: "center" }}>Plankenfelser Wuselwiese</p>
    </div>
  </Layout>
)}

export default IndexPage