import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Besuchen Sie uns im Wald - bald ...</h1>
    <p>Tag der offenen Tür im Waldkindergarten Wiesenttal verschoben</p>
    <p>Leider müssen wir aufgrund der aktuellen Lage unseren Tag der offenen Tür verschieben.</p>
    <p>asdfasd</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
