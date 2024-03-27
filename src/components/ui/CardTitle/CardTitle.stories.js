import { CardTitle } from './CardTitle';
import Icon from '../../../icons/goldenPokeball.svg';

export default {
  title: 'Components/CardTitle',
  component: CardTitle
};

const Template = (args) => <CardTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  icon: Icon
};
