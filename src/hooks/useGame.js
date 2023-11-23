// Importamos los hooks.
import { useContext } from 'react';

// Importamos el contexto.
import { GameContext } from '../contexts/GameContext';

const useGame = () => {
  return useContext(GameContext);
};

export default useGame;
