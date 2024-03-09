import { Dropdown, Content, Item, Trigger } from './Dropdown';
import { Paragraph } from '../Paragraph/Paragraph';
import arrowfilter from '../../../icons/arrowFilter.svg';
import { Checkbox } from '../Checkbox/Checkbox';
import { useState } from 'react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown
};

const Template = (args) => <Dropdown {...args} />;

const DropdownWithHooks = () => {
  const options = ['Fire', 'Normal', 'Electric', 'Water'];
  const [checked, setChecked] = useState(new Array(options.length).fill(false));
  const handleCheckbox = (position) => {
    const updatedChecked = checked.map((item, index) => (index === position ? !item : item));
    setChecked(updatedChecked);
  };
  return (
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
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: <DropdownWithHooks />
};
