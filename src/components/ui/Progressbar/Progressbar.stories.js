import { Progressbar } from './Progressbar';

export default {
  title: 'Components/Progressbar',
  component: Progressbar
};

const Template = (args) => <Progressbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentValue: 80
};
