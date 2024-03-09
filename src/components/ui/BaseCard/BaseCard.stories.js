import { BaseCard } from './BaseCard';
import charizard from '../../../images/charizard.png';

export default {
  title: 'Components/BaseCard',
  component: BaseCard
};

const Template = (args) => <BaseCard {...args} />;

const cardtagTypes = [
  {
    variant: 'default',
    label: 'Grass'
  },
  {
    variant: 'poison',
    label: 'Poison'
  }
];
const powerStats = [
  {
    value: '888',
    label: 'Attack'
  },
  {
    value: '888',
    label: 'Defence'
  }
];

export const Default = Template.bind({});
Default.args = {
  title: 'Charizard',
  imageSrc: charizard,
  imageAlt: 'charizard',
  powerStats: powerStats,
  cardtagTypes: cardtagTypes
};
