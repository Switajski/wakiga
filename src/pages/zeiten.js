import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
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
            <StyledDocx htmlContent={data.zeitendoc.content} />
        </Layout>
    )
}

export default Zeiten

export const Head = () => (
  <Seo title="Zeiten &amp; Beiträge" />
)