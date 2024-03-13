import { FilterWithinRange } from '../FilterWithinRange/FilterWithinRange';

export default {
  title: 'Components/FilterWithinRange',
  component: FilterWithinRange
};

const Template = (args) => <FilterWithinRange {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Experience',
  variant: 'sm',
  from: { label: 'From', placeholder: '70 000' },
  to: { label: 'To', placeholder: '50 000' },
  className: ''
};
