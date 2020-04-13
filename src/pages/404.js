import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Nicht gefunden</h1>
    <p>Du hast eine Seite aufgerufen, die nicht (mehr?) existiert.</p>
  </Layout>
)

export default NotFoundPage
