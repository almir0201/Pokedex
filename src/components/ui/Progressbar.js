import React from 'react';

export const Progressbar = ({ currentValue }) => {
  return (
    <div className="h-4 w-full bg-gray rounded-lg">
      <div style={{ width: `${currentValue}%` }} className="h-full rounded-lg bg-third"></div>
    </div>
  );
};
