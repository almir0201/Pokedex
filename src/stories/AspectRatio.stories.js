import { AspectRatio } from '../components/ui/AspectRatio/AspectRatio';
import charizard from '../images/charizard.png';

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio
};

const Template = (args) => <AspectRatio {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <img src={charizard} alt="charizard" />,
  variant: '1/1'
};

export const Primary = Template.bind({});
Primary.args = {
  children: <img src={charizard} alt="charizard" />,
  variant: '16/9'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <img src={charizard} alt="charizard" />,
  variant: '4/3'
};

export const Third = Template.bind({});
Third.args = {
  children: <img src={charizard} alt="charizard" />,
  variant: '3/4'
};
