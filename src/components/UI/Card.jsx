import React, { useState, forwardRef } from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'

const BaseCard = styled(motion.div)`
    background-color: var(--color-white);
    color: var(--color-blue);
    border-radius: 30px;
    width: 200px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-all;
    overflow: hidden;
    cursor: pointer;
`;
const Front = styled(motion.div)`
    padding: 10px;
`;
const Back = styled(motion.div)`
    padding: 10px;
`;

export const Card = React.forwardRef(({front, back, face, setFace}, ref) => {
    return (
        <div ref={ref}>
            <AnimatePresence >
            {face 
            ? 
            <BaseCard onClick={() => setFace(p => !p)}
                initial={{rotateY: 90}}
                animate={{rotateY: 0}}
                exit={{rotateY: 90}}
                transition={{duration: 0.4}}
            >
                <Front
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.1}}
                >{front}</Front>
            </BaseCard> 
            : 
            <BaseCard onClick={() => setFace(p => !p)}
            initial={{rotateY: 90}}
            animate={{rotateY: 180}}
            exit={{rotateY: 90}}
            transition={{duration: 0.4}}
            >
                <Back 
                initial={{rotateY: 180, opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.1}}
                >{back}</Back>
            </BaseCard>
            }
            </AnimatePresence>
        </div>
    );
})

const MCard = motion(Card)
export default MCard;

