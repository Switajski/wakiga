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
const Image = styled.td`
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
                <Description style={{ padding: "1em" }} width={props.descriptionWidth}>{props.description}</Description>
                <Image style={{ padding: "1em", width: "auto" }}>
                    <Img fluid={props.fluid}/>
                </Image>
            </tr>
        </tbody>
    </Container>
)

export { ImageWithDescriptionLeft }