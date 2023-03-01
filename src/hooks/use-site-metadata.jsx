import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          image
          author
          address
          facebookUsername
        }
      }
    }
  `)

  return data.site.siteMetadata
}