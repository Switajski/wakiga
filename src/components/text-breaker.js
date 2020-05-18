import React from 'react'

const TextBreaker = ({children}) => 
children.split("\n").map((line, index) => 
    <div key={index}>{line.trim()} <br/></div>
);

export default TextBreaker