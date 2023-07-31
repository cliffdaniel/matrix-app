import styled from "styled-components";

export const DiceMain = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const DiceItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;

export const DiceRow = styled.div`
  display: flex;
  margin: 0;
`;

export const Dice = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  font-weight: bold;
  margin: 0;
`;