import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { ImageWithTitle } from "../components/StyledComponents/imagewithdescription"
import { StyledDocx } from "../components/StyledComponents/styleddocx"

const UeberUns = () => {
    const data = useStaticQuery(graphql`
      query { 
        Sabine01_doc: docx(name: {eq: "Sabine"}) {
            content
        }
        Charlotte_doc: docx(name: {eq: "Charlotte"}) {
            content
        }
        Emily_doc: docx(name: {eq: "Emily"}) {
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
        Gitti_doc: docx(name: {eq: "Gitti"}) {
            content
        }
        img_sabine: file(name: {eq: "Sabine"}, relativeDirectory: {eq: "personal"}, extension: {eq: "jpg"}) {
            base
            childImageSharp {
                gatsbyImageData(
                    width: 320
                    layout: CONSTRAINED
                    quality: 85)  
            }
        }
        img_charlotte: file(name: {eq: "Charlotte"}, relativeDirectory: {eq: "personal"}, extension: {eq: "jpg"}) {
            base
            childImageSharp {
                gatsbyImageData(
                    width: 320
                    layout: CONSTRAINED
                    quality: 85)  
            }
        }
        img_emily: file(name: {eq: "Emily"}, relativeDirectory: {eq: "personal"}, extension: {eq: "jpg"}) {
            base
            childImageSharp {
                gatsbyImageData(
                    width: 320
                    layout: CONSTRAINED
                    quality: 85)  
            }
        }
        img_annalena: file(name: {eq: "AnnaLena"}, relativeDirectory: {eq: "personal"}, extension: {eq: "jpg"}) {
            base
            childImageSharp {
                gatsbyImageData(
                    width: 320
                    layout: CONSTRAINED
                    quality: 85)      
            }
        }
        img_gitti: file(name: {eq: "Gitti"}, relativeDirectory: {eq: "personal"}, extension: {eq: "jpg"}) {
            base
            childImageSharp {
                gatsbyImageData(
                    width: 320
                    layout: CONSTRAINED
                    quality: 85)      
            }
        }
      }`)

    return (
        <Layout>
            <ImageWithTitle image={data.img_charlotte.childImageSharp.gatsbyImageData} alt={data.img_charlotte.base.split(".")[0]} text="Charlotte Haffert" />
            <StyledDocx htmlContent={data.Charlotte_doc.content} />
            <hr></hr>
            <ImageWithTitle image={data.img_emily.childImageSharp.gatsbyImageData} alt={data.img_emily.base.split(".")[0]} text="Emily Hutzler" />
            <StyledDocx htmlContent={data.Emily_doc.content} />
            <hr></hr>
            <ImageWithTitle image={data.img_sabine.childImageSharp.gatsbyImageData} alt={data.img_sabine.base.split(".")[0]} text="Sabine Jäschke" />
            <StyledDocx htmlContent={data.Sabine01_doc.content} />
            <hr></hr>
            <ImageWithTitle image={data.img_gitti.childImageSharp.gatsbyImageData} alt={data.img_gitti.base.split(".")[0]} text="Brigitte Harrer" />
            <StyledDocx htmlContent={data.Gitti_doc.content} />
            <hr></hr>
            <ImageWithTitle image={data.img_annalena.childImageSharp.gatsbyImageData} alt={data.img_annalena.base.split(".")[0]} text="Annalena Hofmann" />
            <StyledDocx htmlContent={data.Annalena01_doc.content} />
            <StyledDocx htmlContent={data.Annalena02_doc.content} />
            <hr></hr>
            <StyledDocx htmlContent={data.ueberunsdoc.content} />
        </Layout>
    )
}

export default UeberUns

export const Head = () => (
    <Seo title="Über uns" />
  )