import React from 'react';
import { Paragraph } from '../Paragraph/Paragraph';
import { Progressbar } from '../Progressbar/Progressbar';

export const ProgressWithDescription = ({ title, label, value }) => {
  return (
    <div className="pb-1">
      <Paragraph variant="md" className="font-normal leading-5" font="font-karla">
        {title}
      </Paragraph>
      <Paragraph variant="md" className="font-bold leading-5 mb-1" font="font-karla">
        {label}
      </Paragraph>
      <Progressbar currentValue={value} />
    </div>
  );
};
