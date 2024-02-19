import React from 'react';
import { forwardRef } from 'react';

export const Input = forwardRef(({ variant, label, className, labelClassName, ...props }, ref) => {
  let UIstyle =
    'text-base font-normal px-5 py-2 w-full text-dark placeholder-dark rounded-xxl bg-gray shadow-md ';
  if (variant === 'big') {
    UIstyle += 'py-4';
  }
  if (variant === 'sm') {
    UIstyle += 'text-xs';
  }
  // UIstyle += ` ${className}`;
  return (
    <div className={className}>
      <label className={labelClassName}>{label}</label>
      <input className={UIstyle} {...props} ref={ref} />
    </div>
  );
});
