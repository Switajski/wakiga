import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Konzept = () => (
  <Layout>
    <SEO title="Konzept" />
    <h1>Das Konzept des Waldkindergartens</h1>
    <h2>Sommer wie Winter - lernen und (er)leben in der Natur</h2>
    <p>Die Kinder verbringen zusammen mit ihren Erzieherinnen und Erziehern den Vormittag unter freiem Himmel - bei jedem Wetter. Der Witterung entsprechend angezogen und mit Frühstück im Rucksack geht die kleine Wanderung los. Bis zum Wichtelwald und der Hütte, die nur für bestimmte Tätigkeiten, wie zum Beispiel Malen genutzt wird.</p>
    <Link to="/">zurueck zum Anfang</Link>
  </Layout>
)

export default Konzept