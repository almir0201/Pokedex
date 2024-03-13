import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Grass',
  variant: 'default'
};

export const Special = Template.bind({});
Special.args = {
  children: 'Gold',
  variant: 'special'
};

export const xs = Template.bind({});
xs.args = {
  children: 'Apply',
  variant: 'xs'
};
