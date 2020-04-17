import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'

const Bilder = () => {
    const data = useStaticQuery(graphql`
    query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "bilder" }
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
            {data.allFile.edges.map(image => (
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