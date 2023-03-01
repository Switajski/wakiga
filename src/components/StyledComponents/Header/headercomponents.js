import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import NavDesktop from "./nav-desktop"
import NavMobile from "./nav-mobile"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledHeader = styled.header`
    background: RGB(197, 224, 180);
    margin-bottom: 1.45rem;
    height: 25em;
`
const HeaderContainer = styled.div`
    width: 100%;
    height: 85%;
    display: grid;
`
const StyledBackgroundImage = styled(GatsbyImage)`
    grid-area: 1/1;
    object-fit: cover;
`
const StyledLogo = styled(GatsbyImage)`
    grid-area: 1/1;
    width: 360px;
    height: 340px;
`
const LogoWithLinkContainer = styled.div`
    margin: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100%;
    grid-area: 1/1;
    position: relative;
    place-items: center;
`
const HomeLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-family: 'Chelsea Market', cursive;
`
const LogoContainer = styled.div`
    &:hover { transform: scale(1.1);
`
const BarContainer = styled.div`
    margin: 0 auto;
    padding: 0.8rem 1.0875rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 15%;
`
const NavigationContainer = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const HeadLinePackage = (props) => (
    <HeaderContainer>
        <StyledBackgroundImage image={props.image} alt="" />
        <LogoWithLinkContainer>
            <HomeLink to="/">
                <LogoContainer>
                    <StyledLogo image={props.logo} alt="Waldkindergarten Mäusewiese Plankenfels" />
                </LogoContainer>
            </HomeLink>
        </LogoWithLinkContainer>  
    </HeaderContainer>
)

const BarPackage = (props) => (
    <BarContainer>
        {props.isBig && 
        <NavigationContainer>
            <NavDesktop links={props.links} />
        </NavigationContainer> 
        }
        {!props.isBig && 
        <NavigationContainer>
            <NavMobile links={props.links} />
        </NavigationContainer>
        }
    </BarContainer>
)

export { HeadLinePackage, BarPackage, StyledHeader }