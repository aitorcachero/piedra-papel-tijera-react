import './Game.css';
import useGame from '../../hooks/useGame';

export default function Game() {
  const {
    game,
    imgPlayer,
    imgCPU,
    handleButtonGame,
    msg,
    scorePlayer,
    scoreComputer,
    handleFinishGame,
    name,
  } = useGame();

  return (
    <>
      {game && (
        <>
          <div className="div-game-container">
            <main className="main-game">
              <section className="section-buttons-game">
                <button className="button-game" onClick={handleButtonGame}>
                  Piedra
                </button>
                <button className="button-game" onClick={handleButtonGame}>
                  Papel
                </button>
                <button className="button-game" onClick={handleButtonGame}>
                  Tijera
                </button>
              </section>
              <section className="section-result">
                <div className="section-img-player">
                  <img src={imgPlayer && imgPlayer} className="img-jugador" />
                </div>
                <div className="section-img-player">
                  <img src={imgCPU && imgCPU} className="img-player" />
                </div>
              </section>
              {msg ? (
                <section className="section-select">
                  <h2>{msg}</h2>
                </section>
              ) : (
                <h2>Escoge una opción</h2>
              )}
              <section className="score">
                <table>
                  <thead>
                    <tr>
                      <th>{name}</th>
                      <th>Computer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{scorePlayer}</td>
                      <td>{scoreComputer}</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="section-close">
                <button onClick={handleFinishGame}>Cerrar</button>
              </section>
            </main>
          </div>
        </>
      )}
    </>
  );
}
