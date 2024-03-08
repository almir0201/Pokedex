import { cn } from '../../../lib/utils';
import { forwardRef } from 'react';

export const Input = forwardRef(({ variant, className, label, ...props }, ref) => {
  return (
    <div className={className}>
      {label && (
        <label
          className={cn({
            'pl-5 mb-1 text-xs font-roboto': variant === 'sm'
          })}>
          {label}
        </label>
      )}
      <input
        className={cn(
          'text-base font-normal px-5 py-2 w-full text-dark placeholder-dark rounded-xxl bg-gray',
          className,
          {
            'py-4': variant === 'lg',
            'text-xs': variant === 'sm'
          }
        )}
        {...props}
        ref={ref}
      />
    </div>
  );
});
