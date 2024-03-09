import { Grid } from './Grid';

export default {
  title: 'Components/Grid',
  component: Grid
};

const Template = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>This is grid component</div>,
  cols: '6'
};
