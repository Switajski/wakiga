import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function createMarkup(htmlString) {
    return { __html: htmlString };
}
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
            <div dangerouslySetInnerHTML={createMarkup(data.datenschutz.content)}></div>
        </Layout>
    )
}

export default Datenschutz