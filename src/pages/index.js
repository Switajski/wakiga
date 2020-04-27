import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Herzlich willkommen</h1>
    <p>Aufgrund der aktuellen gesetzlichen Bestimmungen (Sars-CoV-2 Pandemie),
      müssen wir den Tag der offenen Tür leider verschieben.
    </p>
    <p>Wir hoffen, dass wir unseren nagelneuen Waldkindergarten in Plankenfels (Scherleithen) wie geplant am 04.05.2020 für Eure Liebsten eröffnen können.</p>
    <div style={{ maxWidth: `900px`, marginBottom: `10px` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
