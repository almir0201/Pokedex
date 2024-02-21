import React from 'react';
import { forwardRef } from 'react';

export const Checkbox = forwardRef(({ label, className, ...props }, ref) => {
  let UIstyle = 'font-normal text-base leading-5';
  UIstyle += ` ${className}`;
  return (
    <div className={UIstyle} ref={ref}>
      <label>
        <input type="checkbox" className="w-3 h-3 mr-2 rounded-none border-dark" {...props} />
        {label}
      </label>
    </div>
  );
});
