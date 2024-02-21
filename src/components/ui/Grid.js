import React, { Children, cloneElement } from 'react';

export const Grid = ({ children, cols }) => {
  return (
    <div className="grid grid-cols-12">
      {Children.map(children, (child) =>
        cloneElement(child, { className: `col-span-${cols}` }, null)
      )}
    </div>
  );
};
