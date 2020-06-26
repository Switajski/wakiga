import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledDocx } from "../components/StyledComponents/styleddocx"

const Impressum = () => {
    const data = useStaticQuery(graphql`
      query { 
        impressum: docx(name: {eq: "Impressum"}) {
            content
        }
      }`)

    return (
        <Layout>
            <SEO title="Impressum" />
            <StyledDocx htmlContent={data.impressum.content} />
        </Layout>
    )
}

export default Impressum