import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import NavDesktop from "./nav-desktop"
import NavMobile from "./nav-mobile"
import { StaticImage } from "gatsby-plugin-image"

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
const HomeLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-family: 'Chelsea Market', cursive;
`
const HomeImage = styled.div`
    &:hover { transform: scale(1.1);
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

const HeadLinePackage = (props) => (
    <StyledBackgroundImage fluid={props.fluid}>
        <HeadLineContainer>
            <HomeLink to="/">
                <HomeImage>
                    <StaticImage src="../../../images/Waldkindergarten_Logo.png" alt="Waldkindergarten Mäusewiese" placeholder="blurred" layout="fixed" width={437} height={350} />
                </HomeImage>
            </HomeLink>
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