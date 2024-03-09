import { SpecialCard } from './SpecialCard';
import pokemonImage from '../../../images/pokemonImage.png';
import Icon from '../../../icons/goldenPokeball.svg';

export default {
  title: 'Components/SpecialCard',
  component: SpecialCard
};

const Template = (args) => <SpecialCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Meeew',
  imageSrc: pokemonImage,
  imageAlt: 'pokemonImage',
  icon: Icon
};
