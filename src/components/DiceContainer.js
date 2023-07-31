import React from 'react';
import { DiceMain, DiceItems, DiceRow, Dice } from '../styles/DiceStyles';

export const DiceContainer = ({ rotatedMatrix }) => {
  const renderDice = (matrix) => {
    try {
      const parsedMatrix = JSON.parse(matrix);
      if (!Array.isArray(parsedMatrix) || parsedMatrix.length === 0) {
        return null;
      }

      const numRows = parsedMatrix.length;
      const numCols = parsedMatrix[0].length;

      const filledMatrix = parsedMatrix
        .slice(0, numRows)
        .map((row) => [
          ...row.slice(0, numCols),
          ...Array(numCols - row.length).fill(null),
        ]);

      return (
        <DiceItems>
          {filledMatrix.map((row, rowIndex) => (
            <DiceRow key={`row-${rowIndex}`}>
              {row.map((value, colIndex) => (
                <Dice key={`dice-${rowIndex}-${colIndex}`}>{value}</Dice>
              ))}
            </DiceRow>
          ))}
        </DiceItems>
      );
    } catch (error) {
      return null;
    }
  };

  return (
    <DiceMain>
      <DiceItems>{renderDice(JSON.stringify(rotatedMatrix, null, 2))}</DiceItems>
    </DiceMain>
  )
};