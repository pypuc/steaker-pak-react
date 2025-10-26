import React, { useState } from 'react';
import StickerList from './components/StickerList';
import Choise from './components/Choise';
import stickers from './stickers.json';
import './App.css';

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      <StickerList stickers={stickers} onSelect={setSelected} />
      <Choise selected={selected} />
    </div>
  );
}

export default App;
