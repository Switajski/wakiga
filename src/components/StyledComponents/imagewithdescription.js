import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Container = styled.table`
    width: 100%;
    border: 1px;
    border-style: solid;
    border-color: RGB(197, 224, 180);
`
const Description = styled.td`
    padding: 1em;
    width: {props.width};
`
const ImageForDescription = styled.td`
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 1em;
    padding-bottom: 1em;
    width: auto;
`

const ImageWithDescriptionLeft = props => (
    <Container>
        <tbody>
            <tr>
                <Description width={props.descriptionWidth}>{props.description}</Description>
                <ImageForDescription>
                    <GatsbyImage image={props.image}/>
                </ImageForDescription>
            </tr>
        </tbody>
    </Container>
)

const CenteredContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    display: block;
`
const TitledImage = styled(GatsbyImage)`
    max-width: 320px;
`
const CenteredTitle = styled.div`
    text-align: center;
`
const ImageWithTitle = (props) => (
    <CenteredContainer>
        <TitledImage image={props.image} alt={props.alt} style={{ display: "block", margin: "0 auto" }} />
        <CenteredTitle><p>{props.text}</p></CenteredTitle>
    </CenteredContainer>
)

export { ImageWithDescriptionLeft, ImageWithTitle }