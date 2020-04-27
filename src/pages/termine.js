import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Termine = () => (
  <Layout>
    <SEO title="Termine" />
    <h1>Termine</h1>
    <p>Am 04.05.2020 beginnt unsere Kindergarten-Notbetreuung.</p>
    <Link to="/">zurück zum Anfang</Link>
  </Layout>
)

export default Termine