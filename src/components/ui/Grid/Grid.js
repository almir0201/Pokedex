import { Children, cloneElement } from 'react';
import { cn } from '../../../lib/utils';

export const Grid = ({ children, cols, className }) => {
  var gridCols = 12;
  return (
    <div className={cn(`grid grid-cols-${gridCols}`, className)}>
      {Children.map(children, (child) =>
        cloneElement(child, { className: `col-span-${gridCols / cols}` })
      )}
    </div>
  );
};
