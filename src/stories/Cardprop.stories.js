import { Cardprop } from '../components/ui/Cardprop/Cardprop';

export default {
  title: 'Components/Cardprop',
  component: Cardprop
};

const Template = (args) => <Cardprop {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  value: '999',
  className: ''
};
