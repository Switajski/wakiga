import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import NavDesktop from "./nav-desktop"
import NavMobile from "./nav-mobile"

const StyledHeader = styled.header`
    background: RGB(197, 224, 180);
    margin-bottom: 1.45rem;
    height: 25em;

`
const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: relative;
`
const StyledBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    height: 85%; 
`
const HeadLineContainer = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const HeadLine = styled.h1`
    font-family: 'Chelsea Market', cursive;
    margin: 0;
    border: 6px;
    border-style: double;
    border-color: white;
    opacity: 0.7;
    padding: 0.25em;
    &:hover { opacity: 0.85; }
`
const HomeLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-family: 'Chelsea Market', cursive;

`
const BarContainer = styled.div`
    margin: 0 auto;
    max-width: 60;
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
const StyledSVG = styled.svg`
  fill: white;
`

const AdjustedWidth = ({ relative, anchor }) => (
    <div>
        {relative}
        <StyledSVG viewBox="0 -30 338 40">
            <text x="70" y="0">{anchor}</text>
        </StyledSVG>
    </div>
)

const HeadLinePackage = (props) => (
    <StyledBackgroundImage fluid={props.fluid}>
        <HeadLineContainer>
            <HeadLine>
                <HomeLink to="/" activeStyle={{ opacity: "1.0" }}>
                    {props.isBig ? (
                        "Waldkindergarten Plankenfels"
                    ) : (
                        <AdjustedWidth relative="Waldkindergarten" anchor="Plankenfels" />
                    )}
                </HomeLink>
            </HeadLine>
        </HeadLineContainer>  
    </StyledBackgroundImage>
)

const BarPackage = (props) => (
    <BarContainer>
        {(props.isBig || props.isMiddle) && 
        <NavigationContainer>
            <NavDesktop links={props.links} />
        </NavigationContainer> 
        }
        {props.isSmall && 
        <NavigationContainer>
            <NavMobile links={props.links} />
        </NavigationContainer>
        }
    </BarContainer>
)

export { StyledHeader, HeaderContainer, HeadLinePackage, BarPackage }