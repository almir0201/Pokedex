import './index.css';
import { Input } from './components/ui/Input';
import { Checkbox } from './components/ui/Checkbox';
import { Header } from './components/Header';
import { Cardtag } from './components/ui/Cardtag';
import { Button } from './components/ui/Button';
import { Cardprop } from './components/ui/Cardprop';
import { CardContentContainer } from './components/ui/CardContentContainer';
import { Types } from './components/ui/Types';

function App() {
  const testArr = ['Bug', 'Fairy', 'Ghost', 'Dark', 'Fire', 'Glass', 'Lorem'];

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
        <CardContentContainer>
          <Cardprop value="888">Attack</Cardprop>
        </CardContentContainer>

        <CardContentContainer>
          <span>Attack</span>
          <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsum</p>
        </CardContentContainer>

        <Types data={testArr} />
      </div>
    </div>
  );
}

export default App;
