import './App.css'
import { Item } from '../types'
import {useState} from 'react';
import SquareBoard from '../components/SquareBoard/SquareBoard';
import Attempts from '../components/Attempts/Attempts';
import ResetButton from '../components/ResetButton/ResetButton';

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
  const [attempts, setAttempts] = useState(0)
  const handleSquareClick = (index: number) => {
    if (!items[index].clicked) {
      setAttempts((prevAttempts) => prevAttempts + 1)
      const newItems = [...items];
      const newItem = {...newItems[index]};
      newItem.clicked = true;
      newItems[index] = newItem;
      setItems(newItems);
    }
  }

  const handleReset = () => {
    setItems(createItems());
    setAttempts(0);
  }

  return (
    <div>
      <SquareBoard items={items} onSquareClick={handleSquareClick} />
      <Attempts count={attempts} />
      <ResetButton onClick={handleReset} />
    </div>
  )
};

export default App
