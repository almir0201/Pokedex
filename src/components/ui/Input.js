import React from 'react';
import { forwardRef } from 'react';

export const Input = forwardRef(({ variant, className, ...props }, ref) => {
  let UIstyle =
    'text-base font-normal px-5 py-2 w-full text-dark placeholder-dark rounded-xxl bg-gray ';
  if (variant === 'big') {
    UIstyle += 'py-4';
  }
  UIstyle += ` ${className}`;
  return <input className={UIstyle} {...props} ref={ref} />;
});
