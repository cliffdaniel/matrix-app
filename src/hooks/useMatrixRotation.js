import { useState, useMemo, useCallback } from "react";

const useMatrixRotation = () => {
  const [inputMatrix, setInputMatrix] = useState("");
  const [rotatedMatrix, setRotatedMatrix] = useState([]);

  const rotateMatrix = (matrix) => {
    const n = matrix.length;
    const result = new Array(n).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        result[n - 1 - j][i] = matrix[i][j];
      }
    }

    return result;
  };

  const handleRotate = useCallback(() => {
    try {
      const parsedMatrix = JSON.parse(inputMatrix);

      if (!Array.isArray(parsedMatrix) || parsedMatrix.length === 0) {
        throw new Error("Debe ingresar una matriz válida.");
      }

      for (const row of parsedMatrix) {
        if (!Array.isArray(row) || row.length !== parsedMatrix.length) {
          throw new Error("La matriz debe ser cuadrada (NxN).");
        }
      }

      const rotated = rotateMatrix(parsedMatrix);
      setRotatedMatrix(rotated);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }, [inputMatrix]);

  const memoizedInputMatrix = useMemo(() => inputMatrix, [inputMatrix]);
  const memoizedHandleRotate = useCallback(handleRotate, [handleRotate]);

  return {
    inputMatrix: memoizedInputMatrix,
    setInputMatrix,
    rotatedMatrix,
    handleRotate: memoizedHandleRotate,
  };
};

export default useMatrixRotation;