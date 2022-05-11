import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../components/UI/Button';
import { motion } from 'framer-motion';
const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10px;
`;

const GotoWrapper = styled(motion.div)`
  margin: 50px 0;
  text-align: center;
`

const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
`

const Info = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
     <motion.p
     initial={{opacity: 0}}
     animate={{opacity: 1}}
     transition={{delay: 0.2}}
     >Изучайте новые слова! Переходите в свою коллекцию, добавляйте новые наборы и карточки.</motion.p>
     <motion.p
     initial={{opacity: 0}}
     animate={{opacity: 1}}
     transition={{delay: 0.6}}
     >Запомнить слова раз и навсегда поможет метод интервалов.</motion.p>
      <motion.p
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1}}
      > Он заключается в том, что вы будете повторять добавленные наборы с карточками через  1, 3, 9, 27 и 81 день. </motion.p>
      <motion.p
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1.4}}
      >Все созданные вами коллекции сохраняются на вашем устройстве в браузере.</motion.p>

      <GotoWrapper
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1.8}}
      >
        <Title>
          Перейти к коллекции
        </Title>
        <Button onClick={() => navigate('/collection')}>
          GO TO COLLECTION
        </Button>
      </GotoWrapper>
    </Wrapper>
  )
}

export default Info
