import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledDocx } from "../components/StyledComponents/styleddocx"

const Datenschutz = () => {
    const data = useStaticQuery(graphql`
      query { 
        datenschutz: docx(name: {eq: "Datenschutz"}) {
            content
        }
      }`)

    return (
        <Layout>
            <SEO title="Datenschutz" />
            <StyledDocx htmlContent={data.datenschutz.content} />
        </Layout>
    )
}

export default Datenschutz