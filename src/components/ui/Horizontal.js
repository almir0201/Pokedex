import React from 'react';

export const Horizontal = ({ children, align, justify }) => {
  return (
    <div style={{ alignItems: `${align}`, justifyContent: `${justify}` }} className="flex">
      {children}
    </div>
  );
};
