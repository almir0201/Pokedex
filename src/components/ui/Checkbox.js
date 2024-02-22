import { cn } from '../../lib/utils';
import { forwardRef } from 'react';

export const Checkbox = forwardRef(({ label, className, ...props }, ref) => {
  return (
    <div className={cn('font-normal text-base leading-5', className)} ref={ref}>
      <label>
        <input type="checkbox" className="w-3 h-3 mr-2 rounded-none border-dark" {...props} />
        {label}
      </label>
    </div>
  );
});
