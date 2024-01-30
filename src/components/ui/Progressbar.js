import React from 'react';

export const Progressbar = ({ progressPercentage }) => {
  return (
    <div className="h-4 w-full bg-gray rounded-lg">
      <div style={{ width: `${progressPercentage}%` }} className="h-full rounded-lg bg-third"></div>
    </div>
  );
};
