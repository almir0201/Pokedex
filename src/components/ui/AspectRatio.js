import React from 'react';

export const AspectRatio = ({ children, variant }) => {
  let UIstyle = 'relative overflow-hidden [&>*]:absolute [&>*]:left-0 [&>*]:w-full [&>*]:h-full';

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
