import { Children, cloneElement } from 'react';

export const Grid = ({ children, cols }) => {
  var gridCols = 12;
  return (
    <div className={`grid grid-cols-${gridCols}`}>
      {Children.map(children, (child) =>
        cloneElement(child, { className: `col-span-${gridCols / cols}` })
      )}
    </div>
  );
};
