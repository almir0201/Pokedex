import { Slider } from '../components/ui/Slider/Slider';
import { SpecialCard } from '../components/ui/SpecialCard/SpecialCard';
import pokemonImage from '../images/pokemonImage.png';

function App() {
  return (
    <main className="h-screen bg-black">
      <Slider spaceBetween={40} slidesPerView={6} className="mt-20">
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
      </Slider>
    </main>
  );
}

export default App;
