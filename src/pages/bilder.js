import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from '../components/layout'

const Bilder = () => {
    const data = useStaticQuery(graphql`
    query {
    juni: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "juni" }
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
          {data.juni.edges.map(image => (
              <div key={image.node.base}>
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