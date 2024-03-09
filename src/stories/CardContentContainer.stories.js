import { CardContentContainer } from '../components/ui/CardContentContainer/CardContentContainer';

export default {
  title: 'Components/CardContentContainer',
  component: CardContentContainer
};

const Template = (args) => <CardContentContainer {...args} />;

export const Green = Template.bind({});
Green.args = {
  children: 'This is content of card container'
};
