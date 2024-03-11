import { Cardtag } from './Cardtag';

export default {
  title: 'Components/Cardtag',
  component: Cardtag
};

const Template = (args) => <Cardtag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  variant: 'default'
};

export const Poison = Template.bind({});
Poison.args = {
  children: 'Poison',
  variant: 'poison'
};
