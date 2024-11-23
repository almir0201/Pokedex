import { VerticalLayout } from '../components/ui/VerticalLayout/VerticalLayout';
import { AspectRatio } from '../components/ui/AspectRatio/AspectRatio';
import { Headline } from '../components/ui/Headline/Headline';
import { Button } from '../components/ui/Button/Button';
import teamRocket from '../images/teamRocket.png';
import Error from '../images/404.png';
import { Paragraph } from '../components/ui/Paragraph/Paragraph';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main>
      <VerticalLayout
        justify="center"
        className="bg-danger min-h-screen overflow-hidden px-2 py-48 md:px-3 md:py-40 lg:px-20 lg:py-24">
        <div className="w-full">
          <div className="relative">
            <div className="absolute w-full max-w-[1277px] left-0 right-0 top-0 bottom-0 m-auto">
              <AspectRatio variant="16/9">
                <img src={Error} alt="error" />
              </AspectRatio>
            </div>
            <div className="w-full max-w-[690px] mx-auto">
              <AspectRatio variant="10/9">
                <img src={teamRocket} alt="teamRocket" />
              </AspectRatio>
            </div>
          </div>
        </div>
        <VerticalLayout justify="center" className="lg:flex-row">
          <div className="hidden md:block">
            <Headline type="h3" className="lg:mr-3">
              <b>The rocket team</b>
            </Headline>
          </div>
          <div className="block md:hidden">
            <Paragraph variant="2xl" className="text-white" font="font-karla">
              <b>The rocket team</b>
            </Paragraph>
          </div>
          <div className="hidden md:block">
            <Headline type="h3" className="text-black">
              <b>has won this time.</b>
            </Headline>
          </div>
          <div className="block md:hidden">
            <Paragraph variant="2xl" font="font-karla">
              <b>has won this time.</b>
            </Paragraph>
          </div>
        </VerticalLayout>
        <Link to={-1}>
          <Button variant="lg" className="mx-auto mt-16 hidden md:block" font="font-karla">
            <b>Return</b>
          </Button>
          <Button variant="md" className="mx-auto mt-16 block md:hidden" font="font-karla">
            <b>Return</b>
          </Button>
        </Link>
      </VerticalLayout>
    </main>
  );
}

export default App;
