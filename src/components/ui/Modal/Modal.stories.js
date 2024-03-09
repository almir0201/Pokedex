import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>This is modal</div>,
  isOpen: 'true'
};
