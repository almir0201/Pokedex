import { Headline } from '../components/ui/Headline/Headline';

export default {
  title: 'Components/Headline',
  component: Headline
};

const Template = (args) => <Headline {...args} />;

export const h1 = Template.bind({});
h1.args = {
  children: 'This is h1',
  type: 'h1',
  className: 'bg-black'
};

export const h2 = Template.bind({});
h2.args = {
  children: 'This is h2',
  type: 'h2',
  className: 'bg-black'
};

export const h3 = Template.bind({});
h3.args = {
  children: 'This is h3',
  type: 'h3',
  className: 'bg-black'
};

export const h4 = Template.bind({});
h4.args = {
  children: 'This is h4',
  type: 'h4',
  className: 'bg-black'
};

export const h5 = Template.bind({});
h5.args = {
  children: 'This is h5',
  type: 'h5',
  className: 'bg-black'
};

export const h6 = Template.bind({});
h6.args = {
  children: 'This is h6',
  type: 'h6',
  className: 'bg-black'
};
