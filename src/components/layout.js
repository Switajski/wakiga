/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import Footer from "./footer"
import "./layout.css"
import styled from "styled-components"

const StyledMainContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
`
const StyledMain = styled.main`
  padding-left: 0.3rem;
  padding-right: 0.3rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          address
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        links={[
          { url: "/anfahrt/", name: "Kontakt & Anfahrt", key: "1" },
          { url: "/termine/", name: "Termine", key: "2" },
          { url: "/zeiten/", name: "Zeiten & Beiträge", key: "3" },
          { url: "/ueberuns/", name: "Über uns", key: "4" },
          { url: "/downloads/", name: "Downloads", key: "5" },
          { url: "/faq/", name: "FAQ", key: "6" },
          { url: "/bilder/", name: "Bilder", key: "7" },
        ]} />
      <StyledMainContainer>
        <StyledMain>{children}</StyledMain>
        <Footer address={data.site.siteMetadata.address} />
      </StyledMainContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout