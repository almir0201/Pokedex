import React from 'react';
import { cn } from '../../../lib/utils';

export const VerticalLayout = ({ children, align, justify, className }) => {
  return (
    <div
      className={cn('flex flex-col', className, {
        'items-start': justify === 'start',
        'items-end': justify === 'end',
        'items-center': justify === 'center',
        'justify-center': align === 'center',
        'justify-start': align === 'start',
        'justify-end': align === 'end'
      })}>
      {children}
    </div>
  );
};
