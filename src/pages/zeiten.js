import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledDocx } from "../components/StyledComponents/styleddocx"

const Zeiten = () => {
    const data = useStaticQuery(graphql`
      query { 
        zeitendoc: docx(name: {eq: "Zeiten"}) {
            content
        }
      }`)

    return (
        <Layout>
            <SEO title="Zeiten &amp; Sonstiges" />
            <StyledDocx htmlContent={data.zeitendoc.content} />
        </Layout>
    )
}

export default Zeiten