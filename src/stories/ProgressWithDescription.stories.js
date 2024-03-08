import { ProgressWithDescription } from '../components/ui/ProgressWithDescription/ProgressWithDescription';

export default {
  title: 'Components/ProgressWithDescription',
  component: ProgressWithDescription
};

const Template = (args) => <ProgressWithDescription {...args} />;

export const Green = Template.bind({});
Green.args = {
  title: 'Default',
  label: 'default value 999',
  value: 60
};
