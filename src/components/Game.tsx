import ItemHolder from './ItemHolder';
import Board from './Board';
import TileHolder from './TileHolder';

const Game: React.FC = () => {
  return (
    <div className="game">
      <ItemHolder />
      <Board />
      <TileHolder />
    </div>
  );
};

export default Game;
