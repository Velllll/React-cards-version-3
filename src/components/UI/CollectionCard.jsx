import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


const Collection = styled(motion.div)`
    height: 200px;
    width: 150px;
    margin: 10px;
    background-color: var(--color-white);
    border-radius: 20px;
    display: inline-block;
    color: var(--color-blue);
    font-size: 15px;
    cursor: pointer;
    word-break: break-all;
`;
const CollectionRow = styled.div`
    height: 100%;
    text-align: center;
`

const Title = styled.div`
    font-size: var(--fs-sm);
    padding: 10px;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const Info = styled.div``

const Repeat = styled.div``

const Card = styled.div``

const CollectionCard = ({collectionInfo, buttonStatus}) => {
    const navigate = useNavigate()

    const {name, id, cards, repeat} =  collectionInfo

    const repeatDate = () => {
        const today = new Date
        if(repeat.length === 0) {
            return 'Not started'
        } else if (repeat.includes(today.toLocaleDateString())) {
            return 'Today'
        } else {
            return repeat.find(date => date > today.toLocaleDateString())
        }
    }

    const navigateHandler = () => {
        if(buttonStatus === 'Choose') {
            navigate(`/edit/${id}`)
        } else {
            navigate(`/collection/${id}`)
        }
    }

  return (
    <Collection
    onClick={navigateHandler}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1}}
    >
    <CollectionRow>
        <Title>
          {name}
        </Title>
        <Info>
            <Repeat>
                {repeatDate()}
            </Repeat>
            <Card>
                {
                    cards.length === 0 || cards.length === 1 ? 
                    cards.length + ' card' :
                    cards.length + " cards"
                }
            </Card>
        </Info>
    </CollectionRow>
    </Collection>
  )
}

export default CollectionCard
