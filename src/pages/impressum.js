import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function createMarkup(htmlString) {
    return { __html: htmlString };
}
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
            <div dangerouslySetInnerHTML={createMarkup(data.impressum.content)}></div>
        </Layout>
    )
}

export default Impressum