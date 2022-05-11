import React from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';

const Overlay = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #46464655;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Modal = styled(motion.div)`
    max-width: 300px;
    margin: 0 30px;
    background-color: white;
    z-index: 6;
    border-radius: 20px;
    color: var(--color-blue);
    position: relative;
`;
const Close = styled(motion.div)`
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: var(--fs-sm);
`
const Body = styled.div`
    padding: 35px 20px;
`

const ModalWindow = ({children, visible, setVisible}) => {

  return (
    <AnimatePresence>
        {   visible &&
            <Overlay
            onClick={() => setVisible(false)}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
            <Modal
            onClick={(e) => e.stopPropagation()}
            initial={{y: -2000, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: -2000, opacity: 0}}
            >   
                <Close onClick={() => setVisible(p => !p)}>&times;</Close>
                <Body>
                    {children}
                </Body>
                
            </Modal>
            </Overlay>
        }
        
    </AnimatePresence>
  )
}

export default ModalWindow
