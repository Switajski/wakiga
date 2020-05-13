import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function createMarkup(htmlString) {
  return {__html: htmlString};
}

const Termine = () => {
  const data = useStaticQuery(graphql`
  query {
    terminedoc: docx(name: {eq: "Termine"}) {
      content
    }
  }
`)

return(
  <Layout>
    <SEO title="Termine" />
    <div dangerouslySetInnerHTML={createMarkup(data.terminedoc.content)}></div>
  </Layout>
)}

export default Termine