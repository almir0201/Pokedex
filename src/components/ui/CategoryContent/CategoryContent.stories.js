import { CategoryContent } from './CategoryContent';

export default {
  title: 'Components/CategoryContent',
  component: CategoryContent
};

const Template = (args) => <CategoryContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  progressArray: [
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    },
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    },
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    },
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    },
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    },
    {
      title: 'Experience',
      label: '1000,000',
      value: 80
    }
  ],
  title: 'MewTwo',
  label:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
};
