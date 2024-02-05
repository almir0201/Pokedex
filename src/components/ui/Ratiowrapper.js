import React from 'react';

export const Ratiowrapper = ({ children, currentValue }) => {
  return (
    <div style={{ paddingBottom: `${currentValue}%` }} className="w-full h-0">
      {children}
    </div>
  );
};
