import './App.css'
import { Item } from '../types'
import {useState} from 'react';
import SquareBoard from '../components/SquareBoard/SquareBoard';

const createItems = () => {
  const items: Item[] = [];
  const randomIndex = Math.floor(Math.random() * 36);
  for (let i = 0; i < 36; i++) {
    const hasItem = i === randomIndex;
    const clicked = false;
    items.push({ hasItem, clicked })
  }
  return items;
}
const App = () => {

  const [items, setItems] = useState<Item[]>(createItems())

  const handleSquareClick = (index: number) => {
    if (!items[index].clicked) {
      const newItems = [...items];
      const newItem = {...newItems[index]};
      newItem.clicked = true;
      newItems[index] = newItem;
      setItems(newItems);
    }
  }

  return (
    <div>
      <SquareBoard items={items} onSquareClick={handleSquareClick} />
    </div>
  )
};

export default App
