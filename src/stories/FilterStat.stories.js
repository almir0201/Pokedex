import { FilterStat } from '../components/ui/FilterStat/FilterStat';

export default {
  title: 'Components/FilterStat',
  component: FilterStat
};

const Template = (args) => <FilterStat {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'sm',
  from: { label: 'From', placeholder: '70 000' },
  to: { label: 'To', placeholder: '50 000' },
  className: ''
};
