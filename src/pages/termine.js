import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
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
    <StyledDocx htmlContent={data.terminedoc.content} />
  </Layout>
)}

export default Termine

export const Head = () => (
  <Seo title="Termine" />
)