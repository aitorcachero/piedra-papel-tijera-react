import './Instructions.css';
import useGame from '../../hooks/useGame';

export default function Instructions() {
  const { handleInstructions } = useGame();
  return (
    <article className="article-instructions">
      <p className="close-instruction" onClick={handleInstructions}>
        X
      </p>
      <h2>Instrucciones del Juego</h2>
      <ol>
        <li>Elige una de las tres opciones: piedra, papel o tijera.</li>
        <li>
          La piedra aplasta las tijeras. Las tijeras cortan el papel. El papel
          envuelve la piedra. Si ambos jugadores eligen la misma opción, es un
          empate y se juega otra ronda. Si un jugador elige piedra y el otro
          papel, el papel gana. Si un jugador elige papel y el otro tijera, las
          tijeras ganan. Si un jugador elige tijera y el otro piedra, la piedra
          gana.
        </li>
        <li>
          Gana la ronda el que tenga la opción que vence a la elección del
          oponente. La partida la gana el que gane 3 rondas. Después de que se
          haya determinado un ganador, puedes reiniciar el juego para jugar más
          rondas si lo deseas.
        </li>
      </ol>
      <h2>¡Buena suerte!</h2>
    </article>
  );
}
