import './FinishScreen.css';
import useGame from '../../hooks/useGame';
import Confetti from 'react-confetti';
import audio from '../../assets/aplausos.mp3';

export default function FinishScreen() {
  const { handleFinishGame, winner, finish, confetti } = useGame();

  return (
    <>
      {confetti && (
        <>
          <audio src={audio} autoPlay />
          <Confetti />
        </>
      )}
      {finish && (
        <div className="div-finish-container">
          <article
            className="article-finish"
            style={{ backgroundColor: winner.bg }}
          >
            <h1 className="titulo-finish">{winner.h1}</h1>
            <p style={{ fontSize: '1.5em' }}>{winner.p}</p>
            <p style={{ fontSize: '1.5em' }}>¿Quieres volver a jugar?</p>
            <button
              style={{ width: '300px', height: '50px' }}
              onClick={handleFinishGame}
            >
              Reiniciar
            </button>
          </article>
        </div>
      )}
    </>
  );
}
