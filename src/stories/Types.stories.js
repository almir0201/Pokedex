import { Types } from '../components/ui/Types/Types';

export default {
  title: 'Components/Types',
  component: Types
};

const Template = (args) => <Types {...args} />;

const testArr = ['Bug', 'Fairy', 'Ghost', 'Dark', 'Fire', 'Glass', 'Lorem'];

export const Default = Template.bind({});
Default.args = {
  data: testArr,
  className: ''
};
