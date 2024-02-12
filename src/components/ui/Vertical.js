import React from 'react';

export const Vertical = ({ children, align, justify }) => {
  return (
    <div style={{ alignItems: `${align}`, justifyContent: `${justify}` }} className="flex flex-col">
      {children}
    </div>
  );
};
