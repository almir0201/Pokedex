export const Paragraph = ({ className, children, variant, font }) => {
  let UIstyle = 'text-base font-normal text-black leading-normal';
  let fontFamily = font ?? 'font-roboto';
  if (variant === 'xl') {
    UIstyle += ' text-xl hover:underline underline-offset-[15px]';
  }
  if (variant === 'xs') {
    UIstyle += ' text-sm text-dark';
  }
  if (variant === 'lg') {
    UIstyle += ' text-l text-dark';
  }
  if (variant === 'aaa') {
    UIstyle += ' text-s text-dark';
  }
  if (variant === 'bbb') {
    UIstyle += ' text-xs text-dark';
  }
  UIstyle += ` ${fontFamily} ${className}`;
  return <p className={UIstyle}>{children}</p>;
};
