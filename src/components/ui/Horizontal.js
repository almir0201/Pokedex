import React from 'react';

export const Horizontal = ({ children, align, justify }) => {
  return <div className={`flex items-${align} justify-${justify}`}>{children}</div>;
};
