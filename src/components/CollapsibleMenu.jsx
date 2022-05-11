import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './UI/Button'
import MRedButton from './UI/RedButton'
import Input from './UI/Input'
import BlueButton from './UI/BlueButton'

const MainCard = styled(motion.div)`

`

const EditCardsBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 5px;
`

const Card = styled(motion.div)`
    width: 150px;
    font-size: var(--text-sm);
    line-height: var(--text-sm);
    max-height: 42px;
    overflow: hidden;
    word-break: break-all;
`
const CardBottons = styled.div`
    width: 185px;
`


const MEditCardRow = styled(motion.div)`
    width: 335px;
    margin: 0 auto;
    background-color: var(--color-white);

`

const InputItem = styled(motion.div)`
    text-align: center;
    margin: 10px 0;
`
const EditTitle = styled.div`
    color: var(--color-blue);
    margin-bottom: 5px;
    text-align: center;
`


const CollapsibleMenu = ({card, index, changeCard, deleteCard}) => {
    const [visible, setVisible] = useState(false)
    const [front, setFront] = useState(card.front)
    const [back, setBack] = useState(card.back)

    const editHandler = () => {
        setVisible(p => !p)
    }

  return (
    <MainCard>
    <EditCardsBody >
            <Card
            // initial={{x: -200, opacity: 0}}
            // animate={{x: 0, opacity: 1}}
            // transition={{delay: index * 0.1}}
            >
                {front}
            </Card>
        <CardBottons>
            <Button onClick={editHandler}>Edit</Button>
            <MRedButton onClick={() => deleteCard(card.id)}>Delete</MRedButton>
        </CardBottons>
    </EditCardsBody>
    <AnimatePresence>
        {
            visible ? 
            <MEditCardRow
            initial={{height: 0}}
            animate={{height: 'auto',}}
            exit={{height: 0}}
            style={{overflow: 'hidden',}}
            transition={{duration: 0.2}}
            >
                <InputItem>
                    <EditTitle>Front</EditTitle>
                    <Input value={front} setValue={setFront}/>
                </InputItem>
                <InputItem>
                    <EditTitle>Back</EditTitle>
                    <Input value={back} setValue={setBack}/>
                </InputItem>
                <EditTitle>
                <BlueButton onClick={() => changeCard(front, back, card.id)}>Save</BlueButton>
                </EditTitle>
                
            </MEditCardRow> :
            ''
        }
        
    </AnimatePresence>
    </MainCard>
  )
}

export default CollapsibleMenu
