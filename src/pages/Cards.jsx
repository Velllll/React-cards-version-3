import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Carusel from '../components/Carusel'
import styled from 'styled-components'
import MButton from '../components/UI/Button'
import ModalWindow from '../components/UI/ModalWindow'
import CardModalBodyAdd from '../components/modalBody/CardModalBodyAdd'
import { getRepeatDates } from '../utils/getRepeatDates'
import { getCollectionById } from '../fetch/getCollectionById'

const ButtonsRow = styled.div`
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: start;
`

const Warning = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-top: 70px;
`

const Cards = () => {
    const {id} = useParams()
    const [addModalVisible, setAddModalVisible] = useState(false) 
    const [currentCollection, setCurrentCollection] = useState({})
    const [cards, setCards] = useState([])
    const [shuffledCards, setShuffledCards] = useState([])
    const [position, setPosition] = useState(1)
    //true - front; false - back
    const [face, setFace] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const currentCollection = getCollectionById(id)
        setCards(currentCollection.cards)
        setCurrentCollection(currentCollection)
    }, [id])

    const addNewCard = (front, back, setFront, setBack) => {
        const card = {
            front,
            back,
            id: 'cardId:' + Date.now()
        }
        const newCollection = {...currentCollection, cards: [...cards, card]}
        localStorage.setItem(id, JSON.stringify(newCollection))
        setCurrentCollection({...currentCollection, cards: [...cards, card]})
        setCards([...cards, card])
        setAddModalVisible(false)
        setFront('')
        setBack('')
    }

    const shuffle = () => {
        const cardsArr = [...cards]
        cardsArr.sort(() => Math.random() - 0.5)
        setShuffledCards(cardsArr)
        setPosition(1)
    }

    const finishCollection = () => {
        if(currentCollection.repeat.length === 0) {
            const dateRepeat = getRepeatDates()
            localStorage.setItem(id, JSON.stringify({...currentCollection, repeat: dateRepeat}))
            navigate('/collection')
        }
    }
    
  return (
    <>
        <ModalWindow
        visible={addModalVisible}
        setVisible={setAddModalVisible}
        >
            <CardModalBodyAdd
            addNewCard={addNewCard}
            />
        </ModalWindow>

        <ButtonsRow>
            <MButton 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{delay: 0.2}} 
            onClick={() => setAddModalVisible(p => !p)}
            >Add</MButton>
            {
                cards.length !== 0 ?
                <MButton 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.4}} 
                onClick={shuffle}
                >Shuffle</MButton> : 
                ''
            }
            {
                currentCollection.repeat?.length === 0 && cards.length !== 0 ?
                <>
                    <MButton
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        transition={{delay: 0.6}} 
                        onClick={finishCollection}
                    >Finish</MButton> 
                </> :
                ''
            }
            
        </ButtonsRow>
        {
            cards.length !== 0 ?
            <Carusel 
            items={
                shuffledCards.length === 0 ? 
                cards : 
                shuffledCards
            }
            position={position}
            setPosition={setPosition}
            face={face}
            setFace={setFace}
            /> : 
            <Warning>
                Add new card
            </Warning>
        }
        
    </>
  )
}



export default Cards
