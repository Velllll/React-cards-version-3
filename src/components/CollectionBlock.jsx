import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components'
import CollectionCard from './UI/CollectionCard'
const Wrapper = styled.div`
    padding: 10px 0;

`;



const Title = styled(motion.div)`
    font-size: var(--fs-md);
    margin-bottom: 10px;
    font-weight: 700;
`;

const Line = styled(motion.div)`
    height: 2px;
    background-color: var(--color-white) ;
`;

const CollectionRow = styled.div`
    margin: 15px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    @media(min-width: 510px) {
      & {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media(min-width: 680px) {
      & {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    @media(min-width: 850px) {
      & {
        grid-template-columns: repeat(5, 1fr);
      }
    }
`;

const CollectionBlock = ({collections, name, delay = 0.2, buttonStatus}) => {
  return (
    <Wrapper>
      <Title
      initial={{x: -1000, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.5, delay}}
      >{name}</Title>
      <Line
      initial={{width: 0,}}
      animate={{width: '70%',}}
      transition={{duration: 0.5}}
      />
      <CollectionRow>
        {
            collections.map(collection => (
                <CollectionCard 
                key={collection.id} 
                collectionInfo={collection}
                buttonStatus={buttonStatus}
                />
            ))
        }
      </CollectionRow>
    </Wrapper>
  )
}

export default CollectionBlock
