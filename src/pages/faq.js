import React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
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
      <Seo title="FAQ" />
      <StyledDocx htmlContent={data.faq.content} />
    </Layout>
  )}
  
  export default FAQ

  export const Head = () => (
    <Seo title="FAQ" />
  )