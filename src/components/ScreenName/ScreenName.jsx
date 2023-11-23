import './ScreenName.css';
import useGame from '../../hooks/useGame';

export default function ScreenName() {
  const { nameScreen, handleSubmitForm } = useGame();

  return (
    <>
      {nameScreen && (
        <section className="section-input-name">
          <form className="form-name" onSubmit={handleSubmitForm}>
            <h2 style={{ fontSize: '30px' }}>Introduce tu nombre</h2>
            <input className="input-name" type="text" placeholder="Nombre" />
            <button className="btn-comenzar">Empezar</button>
          </form>
        </section>
      )}
    </>
  );
}
