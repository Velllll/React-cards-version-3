import React from 'react'
import styled from 'styled-components'
import Button from '../UI/BlueButton';
import Input from '../UI/Input';

const ModalTitle = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;

const ButtonRow = styled.div`
    text-align: center;
    margin-top: 10px;
`;
const AddModalBody = ({value, setValue, add}) => {
  return (
    <>
        <ModalTitle>Add new collection</ModalTitle>
        <Input value={value} setValue={setValue}/>
        <ButtonRow>
            <Button onClick={add}>Add</Button>
        </ButtonRow> 
    </>
  )
}

export default AddModalBody
