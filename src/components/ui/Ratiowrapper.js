import React from 'react';

export const Ratiowrapper = ({ children, variant }) => {
  let UIstyle = 'w-full h-0 relative overflow-hidden ';

  if (variant === '1/1') {
    UIstyle += 'pb-[100%]';
  }
  if (variant === '16/9') {
    UIstyle += 'pb-[56.25%]';
  }
  if (variant === '4/3') {
    UIstyle += 'pb-[75%]';
  }
  if (variant === '3/4') {
    UIstyle += 'pb-[133.33%]';
  }
  return (
    <div className={UIstyle}>
      <div className="w-full h-full absolute left-0">{children}</div>
    </div>
  );
};
