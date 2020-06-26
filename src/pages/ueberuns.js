import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ImageWithTitle } from "../components/StyledComponents/imagewithdescription"
import { StyledDocx } from "../components/StyledComponents/styleddocx"

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
            <StyledDocx htmlContent={data.personal.content} />
            <ImageWithTitle fluid={data.img_annalena.childImageSharp.fluid} alt={data.img_annalena.base.split(".")[0]} text="Annalena Hofmann" />
            <StyledDocx htmlContent={data.ueberunsdoc.content} />
        </Layout>
    )
}

export default UeberUns