import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./header.css"
 
const LinkContainer = styled.div`
  &:not(:first-child) {
    margin-left: auto;
  }
`
const StyledLink = styled(Link)`
  padding: 0.25em;
  color: RGB(60, 93, 38);
  text-decoration: none;
  font-family: 'Chelsea Market', cursive;

  &:hover {
    background-color: white;
    transition: background-color 1.0s;
    border-radius: 10px;
  }
`

const NavDesktop = ({ links }) => {
  return links.map(link => (
    <LinkContainer key={link.name}>
      <StyledLink to={link.url} activeClassName="desktopnavactive">{link.name}</StyledLink>
    </LinkContainer>
  ))
}

export default NavDesktop