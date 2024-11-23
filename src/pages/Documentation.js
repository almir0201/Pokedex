import { CategoryContent } from '../components/ui/CategoryContent/CategoryContent';
import { CategoryPreview } from '../components/ui/CategoryPreview/CategoryPreview';
import pokemonImage from '../images/pokemonImage.png';

function App() {
  const progressArray = [
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    },
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    },
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    },
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    },
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    },
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    }
  ];
  return (
    <main className="h-full bg-black">
      <CategoryPreview
        progressArray={progressArray}
        image={{ src: pokemonImage, alt: 'pokemonImage' }}>
        <CategoryContent
          progressArray={progressArray}
          title="MewTwo"
          label="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        />
      </CategoryPreview>
    </main>
  );
}

export default App;
