import React, { useState } from 'react'
import styled from 'styled-components'
import MCard from './UI/Card';
import { AnimatePresence, motion } from 'framer-motion';
const Wrapper = styled.div``;

const Main = styled.div`
  width: 300px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Next = styled.div`
  cursor: pointer;
`;
const Previous = styled.div`
  cursor: pointer;
`;

const Position = styled.div`
  text-align: center;
`;

const Carusel = ({items = [], position, setPosition, face, setFace}) => {

  const prevCard = () => {
    if(position === 1) {
      setPosition(items.length)
    } else {
      setPosition(p => p - 1)
    }
    if(!face) {
      setFace(true)
    } 
  }
  
  const nextCard = () => {
    if(position < items.length) {
      setPosition(p => p + 1)
    } else {
      setPosition(1)
    }
    if(!face) {
      setFace(true)
    }
  }

  return (
    <Wrapper>
      {
        items.length ?
        <>
        <Main>
          <Previous onClick={prevCard}>{'<'}</Previous>  
          <MCard 
            front={items[position - 1].front} 
            back={items[position - 1].back}
            face={face}
            setFace={setFace}
          /> 
          <Next onClick={nextCard}>{'>'}</Next>
        </Main>
        <Position>
          {position + '/' + items.length}
        </Position>
        </>
       : 
      ''
      }
        
    </Wrapper>
  )
}

export default Carusel
