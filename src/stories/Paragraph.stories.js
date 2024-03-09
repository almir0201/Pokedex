import { Paragraph } from '../components/ui/Paragraph/Paragraph';

export default {
  title: 'Components/Paragraph',
  component: Paragraph
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default paragraph',
  variant: 'default',
  className: '',
  font: ''
};

export const xs = Template.bind({});
xs.args = {
  children: 'xs paragraph',
  variant: 'xs',
  className: '',
  font: ''
};

export const sm = Template.bind({});
sm.args = {
  children: 'sm paragraph',
  variant: 'sm',
  className: '',
  font: ''
};

export const md = Template.bind({});
md.args = {
  children: 'md paragraph',
  variant: 'md',
  className: '',
  font: ''
};

export const lg = Template.bind({});
lg.args = {
  children: 'lg paragraph',
  variant: 'lg',
  className: '',
  font: ''
};

export const xl = Template.bind({});
xl.args = {
  children: 'xl paragraph',
  variant: 'xl',
  className: '',
  font: ''
};

export const leading = Template.bind({});
leading.args = {
  children: 'paragraph with leading',
  lineHeight: 'leading',
  className: '',
  font: ''
};
