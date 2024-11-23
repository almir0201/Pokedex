import { Headline } from '../components/ui/Headline/Headline';
import { VerticalLayout } from '../components/ui/VerticalLayout/VerticalLayout';
import { Input } from '../components/ui/Input/Input';

function App() {
  return (
    <main className="container">
      <VerticalLayout justify="center" className="mt-16">
        <Headline className="text-black tracking-widest" type="h6">
          <p>
            800 <b>Pokemons</b> for you to choose your favorite
          </p>
        </Headline>
        <Input variant="lg" placeholder="Encuentra tu pokémon..." className="w-full mt-8"></Input>
      </VerticalLayout>
    </main>
  );
}

export default App;
