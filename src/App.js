import './index.css';
import React, { useState } from 'react';
import { Input } from './components/ui/Input';
import { Checkbox } from './components/ui/Checkbox';
import { Header } from './components/Header';
import { Cardtag } from './components/ui/Cardtag';
import { Button } from './components/ui/Button';
import { Cardprop } from './components/ui/Cardprop';
import { Progressbar } from './components/ui/Progressbar';
import { CardContentContainer } from './components/ui/CardContentContainer';
import { ProgressWithDescription } from './components/ui/ProgressWithDescription';
import { Dropdown, Content, Item, Trigger } from './components/ui/Dropdown';
import { Paragraph } from './components/ui/Paragraph';
import arrowfilter from './icons/ArrowFilter.svg';

function App() {
  const options = ['Fire', 'Normal', 'Electric', 'Water'];

  const [checked, setChecked] = useState(new Array(options.length).fill(false));

  const handleCheckbox = (position) => {
    const updatedChecked = checked.map((item, index) => (index === position ? !item : item));
    setChecked(updatedChecked);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="grid grid-cols-12">
          <Input className="mb-2 col-span-4" placeholder="Encuentra tu pokémon..." variant="big" />
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
        <Cardtag variant="poison">Poison</Cardtag>
        <Cardtag variant="grass">Grass</Cardtag>
        <Button>Grass</Button>
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
