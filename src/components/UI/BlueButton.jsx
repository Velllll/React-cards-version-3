import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Btn = styled.button`
    padding: 3px 15px;
    color: var(--color-white);
    background-color: var(--color-blue);
    border: none;
    cursor: pointer;
    font-size: var(--text-sm);
    line-height: var(--text-sm);
    border-radius: 8px;
    margin: 0 10px;
`;

const Button = forwardRef(({children, ...props}, ref) => {
  return (
    <Btn ref={ref} {...props}>{children}</Btn>
  )
})

export default Button;

export const MBlueButton = motion(Button)