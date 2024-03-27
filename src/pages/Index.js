import React from 'react';
import { Footer } from '../components/ui/Footer/Footer';
import { VerticalLayout } from '../components/ui/VerticalLayout/VerticalLayout';
import { AspectRatio } from '../components/ui/AspectRatio/AspectRatio';
import { Hero } from '../components/ui/Hero/Hero';
import pikachu from '../images/Pikachu.png';
import pokeball1 from '../images/PokeBall1.png';
import pokeball2 from '../images/Pokeball2.png';
import clouds from '../images/Clouds.png';

function App() {
  return (
    <main>
      <VerticalLayout className="bg-gradient-to-b from-third to-primary pt-11 md:pt-5 lg:pt-16 overflow-hidden lg:min-h-screen">
        <VerticalLayout className="container lg:flex-row lg:gap-2 pb-7 md:mb-8">
          <div className="lg:basis-2/3">
            <div className="relative md:mx-8 lg:mx-0">
              <div className="absolute w-[18%] lg:w-full max-w-[133px] lg:max-w-[167px] left-[7%] top-[4%] lg:top-3 lg:left-9">
                <AspectRatio variant="1/1">
                  <img src={pokeball1} alt="pokeball1" />
                </AspectRatio>
              </div>
              <div className="absolute w-[74%] lg:w-full max-w-[544px] lg:max-w-[684px] right-[15%] top-[3%]">
                <AspectRatio variant="14/9">
                  <img src={clouds} alt="clouds" />
                </AspectRatio>
              </div>
              <div className="absolute w-[34%] lg:w-full max-w-[251px] lg:max-w-[316px] top-0 right-0 lg:-right-48">
                <AspectRatio variant="1/1">
                  <img src={pokeball2} alt="pokeball2" />
                </AspectRatio>
              </div>
              <div className="relative w-[70%] lg:w-full max-w-[514px] lg:max-w-[647px] left-0 bottom-0 lg:top-8 lg:left-32">
                <AspectRatio variant="1/1">
                  <img src={pikachu} alt="pikachu" />
                </AspectRatio>
              </div>
            </div>
          </div>
          <Hero
            className="lg:w-1/3 order-last lg:order-first text-center lg:text-left"
            headline={
              <p>
                <b>Find</b> all your favorite <b>Pokemon</b>
              </p>
            }
            paragraph="You can know the type of Pokemon, its strengths, disadvantages and abilities"
            buttonText={<b>See Pokemons</b>}
          />
        </VerticalLayout>
        <Footer
          className="justify-between"
          labelLeft="Make with ❤️ for the PokéSpartans team Platzi Master"
          labelRight="Ours Team"
        />
      </VerticalLayout>
    </main>
  );
}

export default App;
