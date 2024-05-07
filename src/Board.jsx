// Importa React y los hooks useState y useEffect
import React, { useEffect, useState } from 'react';

// Importa el archivo CSS para el estilo del tablero
import './css/board.css';

// Componente Board que recibe props para reiniciar, establecer reinicio, ganador y establecer ganador
const Board = ({ reset, setReset, winner, setWinner }) => {
  // Crea un estado 'data' con un array de 9 elementos vacíos que representan las casillas del tablero
  const [data, setData] = useState(Array(9).fill(''));

  // Crea un estado 'current' para almacenar el símbolo del jugador actual (X o O)
  const [current, setCurrent] = useState('X');

  // Hook useEffect para ejecutar código después del renderizado o cuando los valores de las dependencias cambien
  useEffect(() => {
    if (reset) { // Si el prop 'reset' es verdadero
      setData(Array(9).fill('')); // Reinicia el tablero limpiando el array 'data'
      setWinner(''); // Reinicia el ganador limpiando el prop 'winner'
      setReset(false); // Reinicia el prop 'reset' a falso para evitar reinicios continuos
    }
  }, [reset, setReset, winner, winner]); // Dependencias del useEffect: 'reset', 'setReset', 'winner', 'setWinner'

  // Función 'Draw' que se ejecuta al hacer clic en una casilla
  const Draw = (index) => {
    if (data[index] === '') { // Si la casilla seleccionada está vacía
      const board = data.slice(); // Crea una copia del array 'data' para evitar mutación directa
      board[index] = current; // Actualiza la casilla seleccionada con el símbolo del jugador actual
      setData(board); // Establece el nuevo estado 'data' con el tablero actualizado

      if (current === 'X') { // Cambia el turno al siguiente jugador
        setCurrent('O');
      } else {
        setCurrent('X');
      }

      if (checkWin(board)) { // Comprueba si hay un ganador
        if (current === 'X') {
          setWinner('Jugador 1 gana'); // Establece el ganador como "Jugador 1"
        } else {
          setWinner('Jugador 2 gana'); // Establece el ganador como "Jugador 2"
        }
      }
      if (checkDraw(board)) { // Comprueba si hay un empate
        setWinner('Empate'); // Establece el ganador como "Empate"
      }
    }
  };

  // Función 'checkDraw' que verifica si hay empate
  const checkDraw = (board) => {
    let count = 0;
    board.forEach((element) => { // Recorre el array 'board'
      if (element !== '') { // Cuenta las casillas que no están vacías
        count++;
      }
    });
    if (count >= 9) { // Si todas las casillas están llenas
      return true; // Hay empate
    } else {
      return false; // No hay empate
    }
  };

  // Función 'checkWin' que verifica si hay un ganador
  const checkWin = (board) => {
    const conditions = [ // Define las condiciones ganadoras (filas, columnas y diagonales)
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let flag = false;
    conditions.forEach((element) => { // Recorre las condiciones ganadoras
      if (
        board[element[0]] !== '' && // Si las casillas de la condición no están vacías
        board[element[1]] !== '' &&
        board[element[2]] !== ''
      ) {
        if (
          board[element[0]] === board[element[1]] && // Si las casillas de la condición tienen el mismo símbolo
          board[element[1]] === board[element[2]]
        ) {
          flag = true; // Hay un ganador
        }
      }
    });
    return flag; // Devuelve true
