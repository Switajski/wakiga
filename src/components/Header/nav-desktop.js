import React from "react"
import { Link } from "gatsby"

const NavDesktop = ({ links }) => {
  return links.map(link => (
    <div>
      <Link to={link.url}>{link.name}</Link>
    </div>
  ))
}

export default NavDesktop
