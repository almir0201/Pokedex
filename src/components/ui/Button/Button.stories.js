import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Green = Template.bind({});
Green.args = {
  children: 'Grass',
  variant: 'default'
};

export const Blue = Template.bind({});
Blue.args = {
  children: 'Gold',
  variant: 'special'
};
