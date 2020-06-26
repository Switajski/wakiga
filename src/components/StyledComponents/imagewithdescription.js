import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

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
                    <Img fluid={props.fluid}/>
                </ImageForDescription>
            </tr>
        </tbody>
    </Container>
)

const TitledImage = styled(Img)`
    max-width: 320px;
    margin: 0 auto;
`
const CenteredTitle = styled.div`
    text-align: center;
`
const ImageWithTitle = (props) => (
    <>
        <TitledImage fluid={props.fluid} alt={props.alt} />
        <CenteredTitle><p>{props.text}</p></CenteredTitle>
    </>
)

export { ImageWithDescriptionLeft, ImageWithTitle }