import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function createMarkup(htmlString) {
  return {__html: htmlString};
}

const Standort = () => {
  const data = useStaticQuery(graphql`
  query { 
    allDocx {
      edges {
        node { 
          content
        }
      }
    }
  }

`)
return(
  <Layout>
    <SEO title="Standort" />
    <h1>Anfahrt zum Waldkindergarten Plankenfels</h1>
        <h2>Sommer wie Winter - lernen und (er)leben in der Natur</h2>
        {data.allDocx.edges.map(file => (<div dangerouslySetInnerHTML={createMarkup(file.node.content)}></div>))}

        <p>Der Ort Scherleithen gehört zur Gemeinde Plankenfels. Der Waldkindergarten Plankenfels befindet sich in Scherleithen, am Waldrand an einer idyllischen Lichtung umringt von Wäldern.<br /><br />
        Der Platz bietet durch die zwei Wege Abwechslung und Rundgänge, die wir mit den Kindern laufen können. Verschiedene Waldstücke befinden sich um uns herum, die wir erforschen wollen. Auch die zwei Punkte zum Treffpunkt mit den Eltern sind ideal, da die Eltern nahe mit dem Auto hinfahren können, um ihre Kinder zu bringen oder abzuholen.
</p>
    <Link to="/">zurueck zum Anfang</Link>
  </Layout>
)}

export default Standort