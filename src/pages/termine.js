import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledDocx } from "../components/StyledComponents/styleddocx"

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
    <StyledDocx htmlContent={data.terminedoc.content} />
  </Layout>
)}

export default Termine