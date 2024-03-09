import { cn } from '../../lib/utils';
import { forwardRef } from 'react';
import { Paragraph } from './Paragraph';

export const Input = forwardRef(({ variant, className, label, ...props }, ref) => {
  return (
    <div className={className}>
      <label>
        {label && (
          <Paragraph
            variant="xs"
            font="font-roboto"
            className={cn({
              'pl-5 mb-1': variant === 'sm'
            })}>
            {label}
          </Paragraph>
        )}
        <input
          className={cn(
            'text-base font-normal px-5 py-2 w-full text-dark placeholder-dark rounded-xxl bg-gray',
            {
              'py-4': variant === 'lg',
              'text-xs': variant === 'sm'
            }
          )}
          {...props}
          ref={ref}
        />
      </label>
    </div>
  );
});
