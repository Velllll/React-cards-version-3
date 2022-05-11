import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-white);
    height: 60px;
`;

const LinkTo = styled(Link)`
    color: var(--color-blue);
    text-decoration: none;
    font-size: var(--fs-md);
    margin: 0 10px;
    line-height: var(--fs-md);
`

const Header = () => {
  return (
    <Wrapper>
      <LinkTo to={'/collection'}>Collection</LinkTo>
      <LinkTo to={'/'}>Info</LinkTo>
    </Wrapper>
  )
}

export default Header
