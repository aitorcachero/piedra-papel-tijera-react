import './App.css';

import Game from './components/Game/Game';

import Inicio from './components/Inicio/Inicio';
import ScreenName from './components/ScreenName/ScreenName';
import FinishScreen from './components/FinishScreen/FinishScreen';
// import useGame from './hooks/useGamexxxx';

function App() {
  // const { inicio, nameScreen } = useGame();
  return (
    <>
      <Inicio />
      <ScreenName />
      <Game />
      <FinishScreen />
    </>
  );
}

export default App;
