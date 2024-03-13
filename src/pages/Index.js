import { Footer } from '../components/ui/Footer/Footer';
import { Headline } from '../components/ui/Headline/Headline';
import { VerticalLayout } from '../components/ui/VerticalLayout/VerticalLayout';
import { Button } from '../components/ui/Button/Button';
// import { HorizontalLayout } from '../components/ui/HorizontalLayout/HorizontalLayout';
import { AspectRatio } from '../components/ui/AspectRatio/AspectRatio';
import { Paragraph } from '../components/ui/Paragraph/Paragraph';
import pikachu from '../images/Pikachu.png';
import pokeball1 from '../images/PokeBall1.png';
import pokeball2 from '../images/Pokeball2.png';
import clouds from '../images/Clouds.png';

function App() {
  return (
    <main>
      <VerticalLayout className="bg-gradient-to-b from-third to-primary h-screen pt-16">
        <VerticalLayout className="lg:flex-row gap-2">
          <VerticalLayout className="ml-40 w-1/3 order-last lg:order-first">
            <Headline type="h1" className="text-black font-karla leading-9">
              <b>Find</b> all your favourite <b>pokemon</b>
            </Headline>
            <Headline type="h6" className="text-black font-karla leading-9 my-16">
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </Headline>
            <Button className="mr-auto">
              <b>See Pokemons</b>
            </Button>
          </VerticalLayout>
          <div className="relative basis-2/3">
            <div className="absolute w-full max-w-[684px] left-20">
              <AspectRatio variant="16/9">
                <img src={clouds} alt="clouds" />
              </AspectRatio>
            </div>
            <div className="absolute w-full max-w-[166px] top-6 left-11">
              <AspectRatio variant="1/1">
                <img src={pokeball1} alt="pokeball1" />
              </AspectRatio>
            </div>
            <div className="absolute w-full max-w-[316px] right-0 -top-2">
              <AspectRatio variant="1/1">
                <img src={pokeball2} alt="pokeball2" />
              </AspectRatio>
            </div>
            <div className="absolute w-full max-w-[647px] left-40">
              <AspectRatio variant="1/1">
                <img src={pikachu} alt="pikachu" />
              </AspectRatio>
            </div>
          </div>
        </VerticalLayout>
        <Footer className="mx-40 mb-8 mt-auto justify-between">
          <Paragraph variant="md" font="font-karla">
            <b>Make with ❤️ for the PokéSpartans team Platzi Master</b>
          </Paragraph>
          <Paragraph variant="md" font="font-karla">
            <b>Ours Team</b>
          </Paragraph>
        </Footer>
      </VerticalLayout>
    </main>
  );
}

export default App;
