import React from "react"
import { Link } from "gatsby"

const NavDesktop = ({ links }) => {
  return links.map(link => (
    <div key={link.name} className="topnav">
      <Link to={link.url} activeStyle={{borderTop: "3px solid white", borderBottom: "3px solid white"}}>{link.name}</Link>
    </div>
  ))
}

export default NavDesktop