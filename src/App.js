import './index.css';
import { Input } from './components/ui/Input';
import { Checkbox } from './components/ui/Checkbox';
import { Header } from './components/Header';
import { Cardtag } from './components/ui/Cardtag';
import { Button } from './components/ui/Button';
import { Cardprop } from './components/ui/Cardprop';
<<<<<<< HEAD
import { Progressbar } from './components/ui/Progressbar';
=======
import { CardContentContainer } from './components/ui/CardContentContainer';
>>>>>>> main

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
        <CardContentContainer>
          <Cardprop value="888">Attack</Cardprop>
<<<<<<< HEAD
        </div>
        <Progressbar currentValue={80} />
=======
        </CardContentContainer>

        <CardContentContainer>
          <span>Attack</span>
          <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsum</p>
        </CardContentContainer>
>>>>>>> main
      </div>
    </div>
  );
}

export default App;
