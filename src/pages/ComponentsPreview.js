import '../index.css';
import React, { useState } from 'react';
import { Input } from '../components/ui/Input/Input';
import { Checkbox } from '../components/ui/Checkbox/Checkbox';
import { Cardtag } from '../components/ui/Cardtag/Cardtag';
import { Button } from '../components/ui/Button/Button';
import { Cardprop } from '../components/ui/Cardprop/Cardprop';
import { AspectRatio } from '../components/ui/AspectRatio/AspectRatio';
import { Progressbar } from '../components/ui/Progressbar/Progressbar';
import { CardContentContainer } from '../components/ui/CardContentContainer/CardContentContainer';
import { Types } from '../components/ui/Types/Types';
import { ProgressWithDescription } from '../components/ui/ProgressWithDescription/ProgressWithDescription';
import { Dropdown, Content, Item, Trigger } from '../components/ui/Dropdown/Dropdown';
import { Paragraph } from '../components/ui/Paragraph/Paragraph';
import { Modal } from '../components/ui/Modal/Modal';
import arrowfilter from '../icons/arrowFilter.svg';
import charizard from '../images/charizard.png';
import { SpecialCard } from '../components/ui/SpecialCard/SpecialCard';
import pokemonImage from '../images/pokemonImage.png';
import { BaseCard } from '../components/ui/BaseCard/BaseCard';
import { Headline } from '../components/ui/Headline/Headline';

function ComponentsPreview() {
  const testArr = ['Bug', 'Fairy', 'Ghost', 'Dark', 'Fire', 'Glass', 'Lorem'];
  const options = ['Fire', 'Normal', 'Electric', 'Water'];
  const cardtagTypes = [
    {
      variant: 'default',
      label: 'Grass'
    },
    {
      variant: 'poison',
      label: 'Poison'
    }
  ];
  const powerStats = [
    {
      value: '888',
      label: 'Attack'
    },
    {
      value: '888',
      label: 'Defence'
    }
  ];

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
    <div className="App">
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
        <button type="button" onClick={handleOpen}>
          Click me!
        </button>
        <Modal isOpen={open} onClose={handleClose}>
          <Input className="mb-2 col-span-4" placeholder="Encuentra tu pokémon..." variant="big" />
        </Modal>
        <Cardtag variant="poison">Poison</Cardtag>
        <Cardtag>Grass</Cardtag>
        <Button>Grass</Button>
        <Headline className="bg-black" type="h6">
          Aaaaaaaaa
        </Headline>
        <SpecialCard title="Meeew" imageSrc={pokemonImage} imageAlt="pokemonImage" />
        <CardContentContainer>
          <Cardprop value="888" label="Attack" />
        </CardContentContainer>
        <Progressbar currentValue={80} />
        <CardContentContainer>
          <span>Attack</span>
          <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumaaaaaaaaaaaa</p>
        </CardContentContainer>
        <Types data={testArr} />
        <ProgressWithDescription title="Attack" label="2342342" value={80} />
        <AspectRatio variant="1/1">
          <img src={charizard} alt="charizard" />
        </AspectRatio>
        <BaseCard
          title="Charizard"
          imageSrc={charizard}
          imageAlt="charizard"
          powerStats={powerStats}
          cardtagTypes={cardtagTypes}
        />
      </div>
    </div>
  );
}

export default ComponentsPreview;
