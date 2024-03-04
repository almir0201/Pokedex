import { cn } from '../../../lib/utils';
import { forwardRef } from 'react';

export const Input = forwardRef(({ variant, className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'text-base font-normal px-5 py-2 w-full text-dark placeholder-dark rounded-xxl bg-gray',
        className,
        {
          'py-4': variant === 'big'
        }
      )}
      {...props}
      ref={ref}
    />
  );
});
