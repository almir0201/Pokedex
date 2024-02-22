import './index.css';
import { Input } from './components/ui/Input';
import { Checkbox } from './components/ui/Checkbox';
import { Header } from './components/Header';
import { Cardtag } from './components/ui/Cardtag';
import { Button } from './components/ui/Button';
import { Cardprop } from './components/ui/Cardprop';
import { AspectRatio } from './components/ui/AspectRatio';
import { Progressbar } from './components/ui/Progressbar';
import { CardContentContainer } from './components/ui/CardContentContainer';
import { ProgressWithDescription } from './components/ui/ProgressWithDescription';

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
        <AspectRatio variant="1/1"></AspectRatio>
        <CardContentContainer>
          <Cardprop value="888" label="Attack" />
        </CardContentContainer>
        <Progressbar currentValue={80} />
        <CardContentContainer>
          <span>Attack</span>
          <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsum</p>
        </CardContentContainer>
        <ProgressWithDescription title="Attack" label="2342342" value={80} />
      </div>
    </div>
  );
}

export default App;
