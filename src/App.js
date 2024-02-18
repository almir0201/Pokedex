import './index.css';
import { Input } from './components/ui/Input';
import { Checkbox } from './components/ui/Checkbox';
import { Header } from './components/Header';
import { Cardtag } from './components/ui/Cardtag';
import { Button } from './components/ui/Button';
import { Cardprop } from './components/ui/Cardprop';
import { AspecRatio } from './components/ui/AspecRatio';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="grid grid-cols-12">
          <Input className="mb-2 col-span-4" placeholder="Encuentra tu pokémon..." variant="big" />
          <Input className="col-span-4" placeholder="Encuentra tu pokémon..." />
          <Checkbox className="col-span-4" label="Electric" />
        </div>
        <Cardtag variant="poison">Poison</Cardtag>
        <Cardtag variant="grass">Grass</Cardtag>
        <Button>Grass</Button>
        <div className="max-w-xs">
          <Cardprop value="888">Attack</Cardprop>
        </div>
        <AspecRatio variant="1/1">
          <img src="/assets/charizard.png" alt="charizard" />
        </AspecRatio>
      </div>
    </div>
  );
}

export default App;
