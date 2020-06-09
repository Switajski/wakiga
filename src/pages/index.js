import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function createMarkup(htmlString) {
  return {__html: htmlString};
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    index: docx(name: {eq: "Index"}) {
      content
    }
  }
`)

return(
  <Layout>
    <SEO title="Waldkindergarten Plankenfels" />
    <div dangerouslySetInnerHTML={createMarkup(data.index.content)} />
  </Layout>
)}

export default IndexPage