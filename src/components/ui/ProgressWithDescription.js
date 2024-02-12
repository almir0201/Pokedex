import React from 'react';
import { Paragraph } from './Paragraph';
import { Progressbar } from './Progressbar';

export const ProgressWithDescription = ({ statName, statValue, currentValue }) => {
  return (
    <div className="pb-1">
      <Paragraph variant="md" className="font-normal leading-5" font="font-karla">
        {statName}
      </Paragraph>
      <Paragraph variant="md" className="font-bold leading-5 mb-1" font="font-karla">
        {statValue}
      </Paragraph>
      <Progressbar currentValue={currentValue} />
    </div>
  );
};
