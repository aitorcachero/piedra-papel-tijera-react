// Importamos los prop-types.
// import PropTypes from 'prop-types';
import { RESULTS, finishGamePlayer, finishGameCPU } from '../constants';

// Importamos la función que crea un contexto y los hooks.
import { createContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { toast } from 'react-toastify';
import piedra from '../assets/piedra.png';
import papel from '../assets/papel.png';
import tijera from '../assets/tijera.png';

// Creamos un contexto.
export const GameContext = createContext(null);

// Creamos el componente provider del contexto.
export const GameProvider = ({ children }) => {
  const [inicio, setInicio] = useState(true);
  const [nameScreen, setNameScreen] = useState(false);

  const [name, setName] = useState(null);
  const [game, setGame] = useState(false);

  const [imgPlayer, setImgPlayer] = useState(null);
  const [imgCPU, setImgCPU] = useState(null);

  const [scorePlayer, setScore] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);

  const [msg, setMsg] = useState(null);
  const [finish, setFinish] = useState(false);
  const [winner, setWinner] = useState(null);

  const [confetti, setConfetti] = useState(false);

  const [instructions, setInstructions] = useState(false);

  //   const toastError = (errMsg) => toast.error(errMsg);
  //   const toastSuccess = (msg) => toast.success(msg);
  //   const navigate = useNavigate();

  useEffect(() => {
    if (scorePlayer === 3) {
      setWinner(finishGamePlayer);
      setGame(false);
      setFinish(true);
      setConfetti(true);
    } else if (scoreComputer === 3) {
      setWinner(finishGameCPU);
      setGame(false);
      setFinish(true);
    }
  }, [scorePlayer, scoreComputer]);

  const images = {
    PIEDRA: piedra,
    PAPEL: papel,
    TIJERA: tijera,
  };

  function checkWinner(player, computer) {
    if (player === computer) {
      setMsg(`La maquina eligió ${computer}. Empate`);
      return;
    } else if (
      (player === 'PIEDRA' && computer === 'TIJERA') ||
      (player === 'PAPEL' && computer === 'PIEDRA') ||
      (player === 'TIJERA' && computer === 'PAPEL')
    ) {
      setScore((prev) => prev + 1);
      setMsg(`La máquina eligió ${computer}. Ganaste`);
      return;
    } else {
      setScoreComputer((prev) => prev + 1);
      setMsg(`La máquina eligió ${computer}. Perdiste`);
    }
  }

  function cpuResult() {
    const random = Math.floor(Math.random() * 3);
    setImgCPU(images[RESULTS[random]]);
    return RESULTS[random];
  }

  const handleInstructions = () => {
    setInstructions(!instructions);
  };

  const handlePlay = () => {
    setInicio(false);
    setNameScreen(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (e.target[0].value === '') return;
    setName(e.target[0].value);
    setNameScreen(false);
    setGame(true);
  };

  const handleButtonGame = (e) => {
    e.preventDefault();
    const select = e.target.textContent.toUpperCase();
    setImgPlayer(images[select]);
    setImgCPU(images[cpuResult()]);
    checkWinner(select, cpuResult());
  };

  const handleFinishGame = () => {
    setInicio(true);
    setScore(0);
    setScoreComputer(0);
    setImgPlayer(null);
    setImgCPU(null);
    setName(null);
    setFinish(false);
    setWinner(null);
    setGame(false);
    setConfetti(false);
  };

  return (
    <GameContext.Provider
      value={{
        handlePlay,
        inicio,
        nameScreen,
        handleSubmitForm,
        name,
        game,
        setGame,
        imgPlayer,
        imgCPU,
        handleButtonGame,
        scorePlayer,
        scoreComputer,
        msg,
        finish,
        winner,
        handleFinishGame,
        instructions,
        handleInstructions,
        confetti,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// CartProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
