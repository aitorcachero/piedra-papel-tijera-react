import './Inicio.css';
import useGame from '../../hooks/useGame';
import Instructions from '../Instructions/Instructions';
export default function Inicio() {
  const { inicio, handlePlay, handleInstructions, instructions } = useGame();
  return (
    <>
      {inicio && (
        <section className="section-start">
          <article className="article-inicio">
            <div className="btns-inicio">
              {instructions && <Instructions />}
              <button className="btn-inicio" onClick={handleInstructions}>
                Intrucciones
              </button>
              <button className="btn-inicio" onClick={handlePlay}>
                Jugar
              </button>
            </div>
          </article>
        </section>
      )}
    </>
  );
}
