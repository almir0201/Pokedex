import React, { useState, useEffect } from 'react';
import { Footer } from '../components/ui/Footer/Footer';
import { Headline } from '../components/ui/Headline/Headline';
import { VerticalLayout } from '../components/ui/VerticalLayout/VerticalLayout';
import { Button } from '../components/ui/Button/Button';
import { AspectRatio } from '../components/ui/AspectRatio/AspectRatio';
import { Paragraph } from '../components/ui/Paragraph/Paragraph';
import pikachu from '../images/Pikachu.png';
import pokeball1 from '../images/PokeBall1.png';
import pokeball2 from '../images/Pokeball2.png';
import clouds from '../images/Clouds.png';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  return (
    <main>
      <VerticalLayout className="bg-gradient-to-b from-third to-primary pt-11 md:pt-5 lg:pt-16">
        <VerticalLayout className="lg:flex-row lg:gap-2 pb-7 md:mb-8">
          <div className="lg:basis-2/3">
            <div className="relative md:mx-8 lg:mx-0">
              <div className="absolute w-[18%] lg:w-full max-w-[133px] lg:max-w-[167px] ml-[7%] top-[4%] lg:mt-3 lg:ml-9">
                <AspectRatio variant="1/1" className="">
                  <img src={pokeball1} alt="pokeball1" />
                </AspectRatio>
              </div>
              <div className="absolute w-[74%] lg:w-full max-w-[544px] lg:max-w-[684px] right-[19%] top-[3%]">
                <AspectRatio variant="14/9" className="">
                  <img src={clouds} alt="clouds" />
                </AspectRatio>
              </div>
              <div className="absolute w-[34%] lg:w-full max-w-[251px] lg:max-w-[316px] top-0 right-0 lg:-mr-24">
                <AspectRatio variant="1/1" className="">
                  <img src={pokeball2} alt="pokeball2" />
                </AspectRatio>
              </div>
              <div className="w-[70%] lg:w-full max-w-[514px] lg:max-w-[647px] left-0 bottom-0 lg:pt-8 lg:ml-32">
                <AspectRatio variant="1/1" className="">
                  <img src={pikachu} alt="pikachu" />
                </AspectRatio>
              </div>
            </div>
          </div>
          <VerticalLayout
            className="lg:ml-40 lg:w-1/3 order-last lg:order-first text-center lg:text-left"
            align="start">
            <Headline
              type={`${width > 1023 ? 'h1' : 'h5'}`}
              className="text-black font-karla tracking-widest">
              <b>Find</b> all your favourite <b>pokemon</b>
            </Headline>
            <Paragraph
              variant={`${width > 1535 ? '2xl' : 'xl'}`}
              className="text-black font-karla leading-9 my-16">
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </Paragraph>
            <Button className="mx-auto lg:mr-auto lg:ml-0">
              <b>See Pokemons</b>
            </Button>
          </VerticalLayout>
        </VerticalLayout>
        <Footer className="lg:mx-40 mb-8 mt-auto justify-between">
          <VerticalLayout justify="center" className="lg:flex-row justify-between">
            <Paragraph variant="md" font="font-karla" className="lg:order-last">
              <b>Ours Team</b>
            </Paragraph>
            <Paragraph
              variant="md"
              font="font-karla"
              className={`text-center lg:order-first ${
                width > 1535 ? 'font-bold' : 'font-normal'
              }`}>
              Make with ❤️ for the PokéSpartans team Platzi Master
            </Paragraph>
          </VerticalLayout>
        </Footer>
      </VerticalLayout>
    </main>
  );
}

export default App;
