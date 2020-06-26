import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { StyledDocx } from "../components/StyledComponents/styleddocx"

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
      <StyledDocx htmlContent={data.faq.content} />
    </Layout>
  )}
  
  export default FAQ