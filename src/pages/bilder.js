import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from '../components/layout'

const Bilder = () => {
    const data = useStaticQuery(graphql`
    query {
    plankenfels: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "plankenfels_leer" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid (maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        } 
      }
    }
    streitberg: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "streitberg" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid (maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        } 
      }
    }

  }
  `)

    return (
        <Layout>
            <SEO title="Bilder" />
            <h3>Unsere Plankenfelser Wuselwiese</h3>
            {data.plankenfels.edges.map(image => (
                <div>
                    <Img
                        style={
                            {
                                maxWidth: image.node.childImageSharp.fluid.presentationWidth,
                                margin: "0 auto" // center image
                            }}
                        fluid={image.node.childImageSharp.fluid}
                        alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                    />
                    <br />
                </div>
            ))}
            <h3>Impressionen aus Streitberg</h3>
            {data.streitberg.edges.map(image => (
                <div>
                    <Img
                        style={
                            {
                                maxWidth: image.node.childImageSharp.fluid.presentationWidth,
                                margin: "0 auto" // center image
                            }}
                        fluid={image.node.childImageSharp.fluid}
                        alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                    />
                    <br />
                </div>
            ))}

        </Layout>
    )
}

export default Bilder