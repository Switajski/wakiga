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
    width: 339px;
    height: 320px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 0;
    left: 0;
    z-index: 2; 
`
const LogoContainer = styled.div`
    position: relative;
    z-index: 1;
    &:hover {transform: scale(1.03)};
`
const LogoWithLinkContainer = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    grid-area: 1/1;
    position: relative;
    
`
const HomeLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-family: 'Chelsea Market', cursive;
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
const BackgroundRectangle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border-width: 4px;
    border-style: groove;
    border-color: rgba(197, 224, 180, 0.65);
    background-color: rgba(255, 255, 255, 0.65);
    z-index: 0;
`

const HeadLinePackage = (props) => (
    <HeaderContainer>
        <StyledBackgroundImage image={props.image} alt="" />
        <LogoWithLinkContainer>
            <HomeLink to="/">
                <LogoContainer>
                    <StyledLogo image={props.logo} alt="Waldkindergarten Mäusewiese Plankenfels" />
                    <BackgroundRectangle />
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