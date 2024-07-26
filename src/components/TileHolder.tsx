import Tile from './Tile';

const numTiles: number = 7;

const TileHolder: React.FC = () => {
  return (
    <div className="tile-holder">
      {[...Array(numTiles)].map((_, i) => (
        <Tile key={i} />
      ))}
    </div>
  );
};

export default TileHolder;
