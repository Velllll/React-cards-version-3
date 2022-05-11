import React from 'react'
import styled from 'styled-components'

const Ipt = styled.input`
    background-color: var(--color-white);
    color: var(--color-blue);
    border: none;
    font-size: var(--fs-sm);
    line-height: var(--fs-sm);
    outline: none;
    padding: 5px 10px;
`;

const WhiteInput = ({value , setValue}) => {
  return (
    <Ipt value={value} onChange={(e) => setValue(e.target.value)}/>
  )
}

export default WhiteInput