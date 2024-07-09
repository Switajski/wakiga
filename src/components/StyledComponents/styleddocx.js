import React from "react"
import styled from "styled-components"

function createMarkup(htmlString) {
    return {__html: htmlString};
}

const StyledDocxDiv = styled.div`
    > table > tbody > tr > td > p {
        margin-bottom: 0px;
    }
    > table > tbody > tr > td {
        padding: 0.5em;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 1px;
        border-style: solid;    
        border-color: lightgray;
    }
`

const StyledDocx = (props) => (
    <div>
        <StyledDocxDiv dangerouslySetInnerHTML={createMarkup(props.htmlContent)} />
    </div>
)

export { StyledDocx }