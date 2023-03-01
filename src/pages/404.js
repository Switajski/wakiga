import * as React from "react"
import { Link } from "gatsby"
import { Seo } from "../components/seo"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Seite nicht gefunden</h1>
      <p style={paragraphStyles}>
        Entschuldigung 😔, wir können die Seite leider nicht finden, nach welcher Sie gesucht haben.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Zurück zur Homepage</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => (
  <Seo title="Not found" />
)