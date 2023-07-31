import React from 'react';
import useMatrixRotation from '../hooks/useMatrixRotation';
import { Main } from "../styles/GlobalStyles";
import { FormContainer } from '../components/FormContainer';
import { DiceContainer } from '../components/DiceContainer';

export const RotatePage = () => {
  const { inputMatrix, setInputMatrix, rotatedMatrix, handleRotate } = useMatrixRotation();

  return (
    <Main>
      <FormContainer
        inputMatrix={inputMatrix}
        setInputMatrix={setInputMatrix}
        handleRotate={handleRotate}
      />
      <DiceContainer rotatedMatrix={rotatedMatrix} />
    </Main>
  );
};
