import React from 'react';

export const VerticalLayout = ({ children, align, justify }) => {
  return (
    <div
      className={`flex flex-col items-${align} ${justify === 'start' ? 'mb-auto' : ''} ${
        justify === 'end' ? 'mt-auto' : ''
      } ${justify === 'center' ? 'my-auto' : ''}`}>
      {children}
    </div>
  );
};
