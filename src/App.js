import './index.css';
import { useState, useRef } from 'react';
import { Input } from './components/ui/Input';
import { Checkbox } from './components/ui/Checkbox';
import { Header } from './components/Header';
import { Cardtag } from './components/ui/Cardtag';
import { Button } from './components/ui/Button';
import { Cardprop } from './components/ui/Cardprop';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useRef(null);

  const closeOpenMenu = (e) => {
    if (isMenuOpen && !closeMenu.current?.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleShade = () => {
    setIsMenuOpen((prev) => !prev);
  };

  document.addEventListener('mousedown', closeOpenMenu);

  return (
    <div className="App">
      <Header handleShade={handleShade} />
      <div className="container">
        <div className={`${isMenuOpen ? 'bg-dark bg-opacity-50 md:bg-transparent' : null}`}>
          <div className="grid grid-cols-12">
            <Input
              className="mb-2 col-span-4"
              placeholder="Encuentra tu pokémon..."
              variant="big"
            />
            <Input className="col-span-4" placeholder="Encuentra tu pokémon..." />
            <Checkbox className="col-span-4" label="Electric" />
          </div>
          <Cardtag variant="poison">Poison</Cardtag>
          <Cardtag variant="grass">Grass</Cardtag>
          <Button>Grass</Button>
          <div className="max-w-xs">
            <Cardprop value="888">Attack</Cardprop>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
