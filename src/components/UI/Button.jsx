import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Btn = styled.button`
    padding: 3px 15px;
    color: var(--color-blue);
    background-color: var(--color-white);
    border: none;
    cursor: pointer;
    font-size: var(--text-sm);
    line-height: var(--text-sm);
    border-radius: 8px;
    margin: 0 10px;
`;

export const Button = forwardRef(({children, ...props}, ref) => {
  return (
    <Btn ref={ref} {...props}>{children}</Btn>
  )
})



const MButton = motion(Button)

export default MButton;
