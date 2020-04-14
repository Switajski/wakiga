import React, { useState } from "react"
import { Link } from "gatsby"

const Burger = props => (
  <svg {...props} viewBox="0 0 24 24">
    <rect y="2" width="24" height="2" rx="1"></rect>
    <rect y="20" width="24" height="2" rx="1"></rect>
    <rect y="8" width="24" height="2" rx="1"></rect>
    <rect y="14" width="24" height="2" rx="1"></rect>
  </svg>
)

const Cross = props => (
  <svg {...props} viewBox="0 0 95.08 95.09">
    <path d="M58.31 47.47l34.58-34.58a7.63 7.63 0 000-10.69 7.63 7.63 0 00-10.69 0L47.62 36.78 13 2.19a7.63 7.63 0 00-10.69 0 7.63 7.63 0 000 10.69l34.6 34.6L2.33 82.07a7.29 7.29 0 000 10.69 7.63 7.63 0 0010.69 0l34.6-34.6 34.6 34.6a7.27 7.27 0 0010.68 0 7.63 7.63 0 000-10.69z"></path>
  </svg>
)

const MobileButton = ({ open, onClick }) =>
  open ? <Cross onClick={onClick} /> : <Burger onClick={onClick} />

const NavMobile = ({ links }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <div style={{ textAlign: "right" }}>
      <MobileButton open={open} onClick={toggle} />
      {open && (
        <ul>
          {links.map(link => (
            <Link to={link.url}>
              <li style={{ padding: "0.5em", fontSize: "1.3em" }}>
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavMobile
