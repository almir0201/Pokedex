import { Spacer } from './Spacer';

export default {
  title: 'Components/Spacer',
  component: Spacer
};

const Template = (args) => <Spacer {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  className: ''
};

export const s = Template.bind({});
s.args = {
  variant: 's',
  className: ''
};

export const m = Template.bind({});
m.args = {
  variant: 'm',
  className: ''
};

export const l = Template.bind({});
l.args = {
  variant: 'l',
  className: ''
};

export const xl = Template.bind({});
xl.args = {
  variant: 'xl',
  className: ''
};
