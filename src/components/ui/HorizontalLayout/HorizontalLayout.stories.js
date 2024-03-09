import { HorizontalLayout } from './HorizontalLayout';

export default {
  title: 'Components/HorizontalLayout',
  component: HorizontalLayout
};

const Template = (args) => <HorizontalLayout {...args} />;

export const AlignLeft = Template.bind({});
AlignLeft.args = {
  children: 'items-start',
  align: 'start',
  justify: '',
  className: ''
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  children: 'items-center',
  align: 'center',
  justify: '',
  className: ''
};

export const AlignRight = Template.bind({});
AlignRight.args = {
  children: 'items-end',
  align: 'end',
  justify: '',
  className: ''
};

export const JustifyLeft = Template.bind({});
JustifyLeft.args = {
  children: 'justify-start',
  align: '',
  justify: 'start',
  className: ''
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
  children: 'justify-center',
  align: '',
  justify: 'center',
  className: ''
};

export const JustifyRight = Template.bind({});
JustifyRight.args = {
  children: 'justify-end',
  align: '',
  justify: 'end',
  className: ''
};
