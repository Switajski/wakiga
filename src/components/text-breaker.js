import React from 'react'

const TextBreaker = ({children}) => 
children.split("\n").map(line => <>{line} <br/></>) 

export default TextBreaker