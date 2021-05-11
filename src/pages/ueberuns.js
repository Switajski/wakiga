import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ImageWithTitle } from "../components/StyledComponents/imagewithdescription"
import { StyledDocx } from "../components/StyledComponents/styleddocx"

const UeberUns = () => {
    const data = useStaticQuery(graphql`
      query { 
        Nina01_doc: docx(name: {eq: "Nina01"}) {
            content
        }
        Nina02_doc: docx(name: {eq: "Nina02"}) {
            content
        }
        Kathi01_doc: docx(name: {eq: "Kathi01"}) {
            content
        }
        Kathi02_doc: docx(name: {eq: "Kathi02"}) {
            content
        }
        Annalena01_doc: docx(name: {eq: "Annalena01"}) {
            content
        }
        Annalena02_doc: docx(name: {eq: "Annalena02"}) {
            content
        }
        ueberunsdoc: docx(name: {eq: "UeberUns"}) {
            content
        }
        img_nina: file(name: {eq: "nina01"}, relativeDirectory: {eq: "personal"}, extension: {eq: "jpg"}) {
            base
            childImageSharp {
                fluid (maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid }       
            }
        }
        img_kathi: file(name: {eq: "kathi01"}, relativeDirectory: {eq: "personal"}, extension: {eq: "jpg"}) {
            base
            childImageSharp {
                fluid (maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid }       
            }
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
            <StyledDocx htmlContent={data.Nina01_doc.content} />
            <table style={{ width: "100%" }}>
                <tbody>
                <tr>
                    <td >
                        <ImageWithTitle fluid={data.img_nina.childImageSharp.fluid} alt={data.img_nina.base.split(".")[0]} text="Nina Scheidler" />
                    </td>
                </tr>
                </tbody>
            </table>
            <StyledDocx htmlContent={data.Nina02_doc.content} />
            <hr></hr>
            <StyledDocx htmlContent={data.Kathi01_doc.content} />
            <table style={{ width: "100%" }}>
                <tbody>
                <tr>
                    <td >
                        <ImageWithTitle fluid={data.img_kathi.childImageSharp.fluid} alt={data.img_kathi.base.split(".")[0]} text="Katharina Harrer" />
                    </td>
                </tr>
                </tbody>
            </table>
            <StyledDocx htmlContent={data.Kathi02_doc.content} />
            <hr></hr>
            <StyledDocx htmlContent={data.Annalena01_doc.content} />
            <table style={{ width: "100%" }}>
                <tbody>
                <tr>
                    <td >
                        <ImageWithTitle fluid={data.img_annalena.childImageSharp.fluid} alt={data.img_annalena.base.split(".")[0]} text="Annalena Hofmann" />
                    </td>
                </tr>
                </tbody>
            </table>
            <StyledDocx htmlContent={data.Annalena02_doc.content} />
            <StyledDocx htmlContent={data.ueberunsdoc.content} />
        </Layout>
    )
}

export default UeberUns