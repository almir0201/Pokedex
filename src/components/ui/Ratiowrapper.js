import React from 'react';

export const Ratiowrapper = ({ children, variant }) => {
  let UIstyle = 'w-full h-full relative overflow-hidden [&>]:absolute [&>]:left-0 ';

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
  return <div className={UIstyle}>{children}</div>;
};
