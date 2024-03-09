import { VerticalLayout } from '../components/ui/VerticalLayout/VerticalLayout';

export default {
  title: 'Components/VerticalLayout',
  component: VerticalLayout
};

const Template = (args) => <VerticalLayout {...args} />;

export const AlignLeft = Template.bind({});
AlignLeft.args = {
  children: 'items-start',
  align: '',
  justify: 'start',
  className: ''
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  children: 'items-center',
  align: '',
  justify: 'center',
  className: ''
};

export const AlignRight = Template.bind({});
AlignRight.args = {
  children: 'items-end',
  align: '',
  justify: 'end',
  className: ''
};

export const JustifyLeft = Template.bind({});
JustifyLeft.args = {
  children: 'justify-start',
  align: 'start',
  justify: '',
  className: ''
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
  children: 'justify-center',
  align: 'center',
  justify: '',
  className: ''
};

export const JustifyRight = Template.bind({});
JustifyRight.args = {
  children: 'justify-end',
  align: 'end',
  justify: '',
  className: ''
};
