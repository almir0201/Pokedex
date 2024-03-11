import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input
};

const Template = (args) => <Input {...args} />;

export const sm = Template.bind({});
sm.args = {
  variant: 'sm',
  label: 'Small Input',
  className: ''
};

export const lg = Template.bind({});
lg.args = {
  variant: 'lg',
  label: 'Large Input',
  className: ''
};
