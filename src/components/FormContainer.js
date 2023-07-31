import React from 'react';
import { FlexContainer, Title, Input } from '../styles/FormStyles';

export const FormContainer = ({ inputMatrix, setInputMatrix, handleRotate }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const validInputValue = inputValue.replace(/[^\[\]0-9,]/g, '');
    setInputMatrix(validInputValue);
  };

  return (
    <FlexContainer>
      <Title>Ingresar matriz</Title>
      <Input
        type="text"
        value={inputMatrix}
        onChange={handleChange}
        placeholder="Ingrese la matriz en formato JSON"
        pattern="[\[\]0-9,]*"
      />
      <button onClick={handleRotate}>Rotar</button>
    </FlexContainer>
  );
};