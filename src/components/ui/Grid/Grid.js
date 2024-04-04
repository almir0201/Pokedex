import { Children, cloneElement } from 'react';
import { cn } from '../../../lib/utils';

// eslint-disable-next-line
const _DO_NOT_PURGE = [
  'col-span-1',
  'col-span-2',
  'col-span-3',
  'col-span-4',
  'col-span-5',
  'col-span-6',
  'col-span-7',
  'col-span-8',
  'col-span-9',
  'col-span-10',
  'col-span-11',
  'col-span-12',
  'grid-cols-1',
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-4',
  'grid-cols-5',
  'grid-cols-6',
  'grid-cols-7',
  'grid-cols-8',
  'grid-cols-9',
  'grid-cols-10',
  'grid-cols-11',
  'grid-cols-12'
];

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
