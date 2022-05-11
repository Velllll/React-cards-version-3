import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCollectionById } from '../fetch/getCollectionById'
import styled from 'styled-components'
import MRedButton from '../components/UI/RedButton'
import WhiteInput from '../components/UI/WhiteInput'
import { Button } from '../components/UI/Button'
import { motion } from 'framer-motion'
import CollapsibleMenu from '../components/CollapsibleMenu'

const Wrapper = styled.div``;

const Title = styled(motion.div)`
    margin: 20px 0;
    font-size: var(--fs-md);
    font-weight: 700;
    text-align: center;
    overflow: hidden;
    word-break: break-all;
`;
const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 auto;

`
const ChangeBlock = styled(motion.div)`
    width: 100%;
`
const CardsBlock = styled(motion.div)`
    width: 100%;
`

const EditName = styled.div`
    margin-top: 30px;
    text-align: center;
`;

const EditNameTitle = styled.div`
    margin-bottom: 10px;
    
`
const EditCards = styled.div``;

const EditCardsTitle = styled.div`
    text-align: center;
    margin-top: 30px;
`;

const DeleteCollection = styled(motion.div)`
    margin: 40px 0;
    text-align: center;
`;



const EditPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [currentCollection, setCurrentCollection] = useState({}) 
    const [changeNameValue, setChangeNameValue] = useState('')

    useEffect(() => {
        const collection = getCollectionById(id)
        setCurrentCollection(collection)
    }, [id])

    const deleteCollection = () => {
        localStorage.removeItem(id)
        navigate('/collection')
    }

    const changeName = () => {
        setCurrentCollection({...currentCollection, name: changeNameValue})
        localStorage.setItem(id, JSON.stringify({...currentCollection, name: changeNameValue}))
        setChangeNameValue('')
    }

    const changeCard = (front, back, idCard) => {
        const cardsArray = [...currentCollection.cards]
        const mapedArr = cardsArray.map(card => {
            if(card.id === idCard) {
                return {
                    front,
                    back,
                    id: card.id,
                }
            } else {
                return card
            }
        })
        const editCollection = {...currentCollection, cards: mapedArr}
        localStorage.setItem(id, JSON.stringify(editCollection))
    }

    const deleteCard = (idCard) => {
        const cardsArray = [...currentCollection.cards]
        const filteredCardsArray = cardsArray.filter(card => card.id !== idCard)
        setCurrentCollection({...currentCollection, cards: filteredCardsArray})
        localStorage.setItem(id, JSON.stringify({...currentCollection, cards: filteredCardsArray}))
    }

  return (
    <Wrapper>
        <Title
        initial={{y: -300, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{delay: 0.2}}
        >
            Edit collection: {currentCollection.name}
        </Title>
        <Row>
            <ChangeBlock
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.6}}
            >
                <EditName>
                <EditNameTitle>
                    Change name
                </EditNameTitle>
                <WhiteInput 
                value={changeNameValue}
                setValue={setChangeNameValue}
                />
                <Button onClick={changeName}>Change</Button>
                </EditName>
            </ChangeBlock>
            {
                currentCollection.cards?.length !== 0 ?
                <CardsBlock
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1}}
                >
                <EditCards>
                    <EditCardsTitle>
                        Edit cards
                    </EditCardsTitle>
                    {
                        currentCollection.cards?.map((card, index) => (
                            <CollapsibleMenu 
                            key={card.id} 
                            card={card}
                            index={index}
                            changeCard={changeCard}
                            deleteCard={deleteCard}
                            />
                        ))
                    }    
                </EditCards>
                </CardsBlock> :
                ''
            }

        </Row>

        <DeleteCollection
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.4}}
        >
            <MRedButton onClick={deleteCollection}>Delete collection</MRedButton>
        </DeleteCollection>
    </Wrapper>
  )
}

export default EditPage
