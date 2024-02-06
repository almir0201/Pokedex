import React from 'react';

export const Ratiowrapper = ({ children, padding }) => {
  return (
    <div style={{ paddingBottom: `${padding}%` }} className="w-full h-0">
      {children}
    </div>
  );
};
