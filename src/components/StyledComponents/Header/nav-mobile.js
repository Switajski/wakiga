import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledSVG = styled.svg`
  fill: white;
  width: 20px;
  height: 20px;
`

const Burger = props => (
  <StyledSVG {...props} viewBox="0 0 24 24">
    <rect y="2" width="24" height="2" rx="1"></rect>
    <rect y="20" width="24" height="2" rx="1"></rect>
    <rect y="8" width="24" height="2" rx="1"></rect>
    <rect y="14" width="24" height="2" rx="1"></rect>
  </StyledSVG>
)

const Cross = props => (
  <StyledSVG {...props} viewBox="0 0 95.08 95.09">
    <path d="M58.31 47.47l34.58-34.58a7.63 7.63 0 000-10.69 7.63 7.63 0 00-10.69 0L47.62 36.78 13 2.19a7.63 7.63 0 00-10.69 0 7.63 7.63 0 000 10.69l34.6 34.6L2.33 82.07a7.29 7.29 0 000 10.69 7.63 7.63 0 0010.69 0l34.6-34.6 34.6 34.6a7.27 7.27 0 0010.68 0 7.63 7.63 0 000-10.69z"></path>
  </StyledSVG>
)

const MobileButton = ({ open, onClick }) =>
  open ? <Cross onClick={onClick} /> : <Burger onClick={onClick} />

const NavElement = styled.p`
  padding: 0.35em 0;
  font-size: 1.0em;
  text-align: center;
  background-color:  rgba(197, 224, 180, 1.0);
  margin-bottom: 0;
  transition: 0.3s;
  &:hover { 
    background-color:  white;
  }
`
const NavigationBar = styled.nav`
  z-index: 999;
  position: sticky;
`
const NavigationContainer = styled.div`
  text-align: center;
  width: 12rem;
  z-index: 998;
`
const NavigationWrapper = styled.div`
  border: none;

  ${({ showBorder }) =>
      showBorder &&
      `
      border-top: 1px solid RGB(60, 93, 38);
      border-left: 1px solid RGB(60, 93, 38);
      border-right: 1px solid RGB(60, 93, 38);
      border-bottom: 1px solid RGB(60, 93, 38);
      border-radius: 20px;
      margin-top: -10px;
      padding: 10px;
      background-color: rgba(197, 224, 180, 1.0);
      `}
`
const StyledLink = styled(Link)`
  color: RGB(60, 93, 38);
  text-decoration: none;
  font-family: 'Chelsea Market', cursive;

  &:first-child > p { 
    border-top: 1px;
    border-left: 1px;
    border-right: 1px;
    border-bottom: 1px;
    border-style: solid;
  }
  &:last-child > p {
    border-top: 1px;
    border-left: 1px;
    border-right: 1px;
    border-bottom: 1px;
    border-style: solid;
    margin-top: 2px;
    margin-bottom: 7px;
  }
  &:not(:first-child):not(:last-child) > p {
    border-top: 1px;
    border-left: 1px;
    border-right: 1px;
    border-bottom: 1px;
    border-style: solid;
    margin-top: 2px;
  }
`
const NavMobile = ({ links }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  const showBorder = open

  return (
    <NavigationContainer>
      <NavigationWrapper showBorder={showBorder}>
        <MobileButton open={open} onClick={toggle}/>
        {open && (
          <NavigationBar>
            {links.map(link => (
              <StyledLink to={link.url} key={link.name} >
                <NavElement>{link.name}</NavElement>
              </StyledLink>
            ))}
          </NavigationBar>
        )}
      </NavigationWrapper>
    </NavigationContainer>
  )
}

export default NavMobile