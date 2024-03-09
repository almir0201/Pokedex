import { Checkbox } from '../components/ui/Checkbox/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
  className: ''
};
