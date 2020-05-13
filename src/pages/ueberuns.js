import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

function createMarkup(htmlString) {
    return { __html: htmlString };
}
const UeberUns = () => {
    const data = useStaticQuery(graphql`
      query { 
        personal: docx(name: {eq: "Personal"}) {
            content
        }
        ueberunsdoc: docx(name: {eq: "UeberUns"}) {
            content
        }
        img_annalena: file(name: {eq: "AnnaLena"}, relativeDirectory: {eq: "personal"}, extension: {eq: "jpg"}) {
            base
            childImageSharp {
                fluid (maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid }       
            }
        }
      }`)

    return (
        <Layout>
            <SEO title="Über uns" />
            <div dangerouslySetInnerHTML={createMarkup(data.personal.content)}></div>
            <Img
                style={{ maxWidth: 320, margin: "0 auto" }} // center image
                fluid={data.img_annalena.childImageSharp.fluid}
                alt={data.img_annalena.base.split(".")[0]} // only use section of the file extension with the filename
            />
            <div style={{ textAlign: "center" }}><p>Annalena Hofmann</p></div>
            <div dangerouslySetInnerHTML={createMarkup(data.ueberunsdoc.content)}></div>
        </Layout>
    )
}

export default UeberUns