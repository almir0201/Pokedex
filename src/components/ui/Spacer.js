import React from 'react';

export const Spacer = ({ className }) => {
  let UIstyle = 'border-2 mt-6 h-1 ';
  UIstyle += ` ${className}`;

  return <p className={UIstyle} />;
};
