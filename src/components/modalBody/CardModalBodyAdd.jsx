import React, { useState } from 'react'
import Input from '../UI/Input'
import BlueButton from '../UI/BlueButton'
import styled from 'styled-components'

const Wrapper = styled.div`

`;

const Title = styled.div`
    margin-bottom: 10px;
    text-align: center;
`;

const InputsRow = styled.div`
margin-bottom: 10px;
text-align: center;
`;

const BottonRow = styled.div`
text-align: center;
`;

const CardModalBodyAdd = ({addNewCard}) => {
    const [valueFront, setFront] = useState('')
    const [valueBack, setBack] = useState('')
    return (
    <Wrapper>    
        <Title>Add new card</Title>
        <>Front:</>    
        <InputsRow>
            <Input
            value={valueFront}
            setValue={setFront}
            />
        </InputsRow>
        <>Back:</>
        <InputsRow>
            <Input
            value={valueBack}
            setValue={setBack}
            />
        </InputsRow>
        
        <BottonRow>
            <BlueButton onClick={() => addNewCard(valueFront, valueBack, setFront, setBack)}>Add</BlueButton>
        </BottonRow>
        
    </Wrapper>
  )
}

export default CardModalBodyAdd
