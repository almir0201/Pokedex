import './index.css';
import React, { useState } from 'react';
import { Input } from './components/ui/Input';
import { Checkbox } from './components/ui/Checkbox';
import { Header } from './components/Header';
import { Cardtag } from './components/ui/Cardtag';
import { Button } from './components/ui/Button';
import { Cardprop } from './components/ui/Cardprop';
import { AspectRatio } from './components/ui/AspectRatio';
import { Progressbar } from './components/ui/Progressbar';
import { CardContentContainer } from './components/ui/CardContentContainer';
import { Types } from './components/ui/Types';
import { ProgressWithDescription } from './components/ui/ProgressWithDescription';
import { Dropdown, Content, Item, Trigger } from './components/ui/Dropdown';
import { Paragraph } from './components/ui/Paragraph';
import { Modal } from './components/ui/Modal';
import arrowfilter from './icons/ArrowFilter.svg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const testArr = ['Bug', 'Fairy', 'Ghost', 'Dark', 'Fire', 'Glass', 'Lorem'];
  const options = ['Fire', 'Normal', 'Electric', 'Water'];

  const [checked, setChecked] = useState(new Array(options.length).fill(false));
  const [open, setOpen] = useState(false);

  const handleCheckbox = (position) => {
    const updatedChecked = checked.map((item, index) => (index === position ? !item : item));
    setChecked(updatedChecked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <div className="container">
          <div className="grid grid-cols-12">
            <Input
              className="mb-2 col-span-4"
              placeholder="Encuentra tu pokémon..."
              variant="big"
            />
            <Input className="col-span-4" placeholder="Encuentra tu pokémon..." />
            <Checkbox className="col-span-4" label="Electric" />
          </div>
          <Dropdown>
            <Trigger>
              <Paragraph className="flex-1" variant="md" font="font-sanspro">
                Type
              </Paragraph>
              <img className="mr-2" src={arrowfilter} alt="" />
            </Trigger>
            <Content>
              {options.map((item, index) => (
                <Item key={index}>
                  <Checkbox
                    className="col-span-4 mb-2 pl-7 leading-4"
                    label={item}
                    checked={checked[index]}
                    onChange={() => handleCheckbox(index)}
                  />
                </Item>
              ))}
            </Content>
          </Dropdown>
          <button type="button" onClick={handleOpen}>
            Click me!
          </button>
          <Modal isOpen={open} onClose={handleClose}>
            <Input
              className="mb-2 col-span-4"
              placeholder="Encuentra tu pokémon..."
              variant="big"
            />
          </Modal>
          <Cardtag variant="poison">Poison</Cardtag>
          <Cardtag>Grass</Cardtag>
          <Button>Grass</Button>
          <Button variant="special">Gold</Button>
          <CardContentContainer>
            <Cardprop value="888" label="Attack" />
          </CardContentContainer>
          <AspectRatio variant="1/1">
            <img src="/assets/charizard.png" alt="charizard" />
          </AspectRatio>
          <Progressbar currentValue={80} />
          <CardContentContainer>
            <span>Attack</span>
            <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsum</p>
          </CardContentContainer>
          <Types data={testArr} />
          <ProgressWithDescription title="Attack" label="2342342" value={80} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
