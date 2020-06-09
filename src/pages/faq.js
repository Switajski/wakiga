import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

function createMarkup(htmlString) {
    return {__html: htmlString};
}

const FAQ = () => {
    const data = useStaticQuery(graphql`
    query {
      faq: docx(name: {eq: "FAQ"}) {
        content
      }
    }
  `)
  
  return(
    <Layout>
      <SEO title="FAQ" />
      <div dangerouslySetInnerHTML={createMarkup(data.faq.content)}></div>
    </Layout>
  )}
  
  export default FAQ