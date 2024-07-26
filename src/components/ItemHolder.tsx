import Item from './Item';

const numItems: number = 5;

const ItemHolder: React.FC = () => {
  return (
    <div className="item-holder">
      {[...Array(numItems)].map((_, i) => (
        <Item key={i} />
      ))}
    </div>
  );
};

export default ItemHolder;
