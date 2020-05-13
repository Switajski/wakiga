import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function createMarkup(htmlString) {
    return { __html: htmlString };
}
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
            <div dangerouslySetInnerHTML={createMarkup(data.zeitendoc.content)}></div>
        </Layout>
    )
}

export default Zeiten