import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MButton from '../components/UI/Button'
import CollectionBlock from '../components/CollectionBlock'
import ModalWindow from '../components/UI/ModalWindow'
import CollectionModalBodyAdd from '../components/modalBody/CollectionModalBodyAdd'
import { getAllCollections } from '../fetch/getAllCollections'
import { sortCollections } from '../utils/sortCollections'

const ButtonsRow = styled.div`
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: start;
`

const CollectionRow = styled.div``;

const Warning = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-top: 70px;
`

const Collection = () => {
    const [addModalVisible, setAddModalVisible] = useState(false)
    const [modalValue, setModalValue] = useState('')
    const [notStarted, setNotStarted] = useState([])
    const [learnLate, setLearnLate] = useState([])
    const [learnToday, setLearnToday] = useState([])
    const [editButton, setEditButton] = useState('Edit')

    useEffect(() => {
        const store = getAllCollections()
        const {notStarted, learnLate, learnToday} = sortCollections(store)
        setNotStarted(notStarted)
        setLearnLate(learnLate)
        setLearnToday(learnToday)
    }, [])

    const addNewCollection = () => {
        const newCollection = {
            name: modalValue, 
            id: Date.now(),
            cards: [], 
            repeat: [],
        }
        localStorage.setItem(newCollection.id, JSON.stringify(newCollection))
        setNotStarted([...notStarted, newCollection])
        setModalValue('')
        setAddModalVisible(false)
    }

    const editButtonHandler = () => {
        if(editButton === 'Edit') {
            setEditButton('Choose')
        } else {
            setEditButton('Edit')
        }
    }

  return (
    <>
        <ModalWindow
        visible={addModalVisible}
        setVisible={setAddModalVisible}
        >
            <CollectionModalBodyAdd
            value={modalValue}
            setValue={setModalValue}
            add={addNewCollection}
            />    
        </ModalWindow>

        <ButtonsRow>
            <MButton
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{delay: 0.8}} 
            onClick={() => setAddModalVisible(true)}>Add</MButton>
            {
                notStarted.length !== 0 || learnLate.length !== 0 || learnToday.length !== 0 ?
                <MButton
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1}} 
                onClick={editButtonHandler}>{editButton}</MButton> : 
                ''
            }
            

        </ButtonsRow>
    {
        notStarted.length !== 0 || learnLate.length !== 0 || learnToday.length !== 0 ?
        <CollectionRow>
        {
            learnToday.length ? 
            <CollectionBlock
            collections={learnToday}
            name={'Learn today'}
            delay={0.2}
            buttonStatus={editButton}
            /> :
            ''
        }
        {
            learnLate.length ? 
            <CollectionBlock
            collections={learnLate}
            name={'Learn Late'}
            delay={0.4}
            buttonStatus={editButton}
            /> :
            ''
        }
        {
            notStarted.length ?
            <CollectionBlock
            collections={notStarted}
            name={'Not Started'}
            delay={0.6}
            buttonStatus={editButton}
            /> :
            ''
        }
        </CollectionRow> :
        <Warning>Add new collection</Warning>
    }
    
    </>
  )
}

export default Collection
