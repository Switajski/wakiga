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
    placeholderImage: file(relativePath: { eq: "tippi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
          presentationWidth
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
      <Img style={{ margin: "0 auto", maxWidth: data.placeholderImage.childImageSharp.fluid.presentationWidth}}
           fluid={data.placeholderImage.childImageSharp.fluid}/>
           <p style={{ textAlign: "center" }}>Das Tippi steht</p>
    </div>
  </Layout>
)}

export default IndexPage