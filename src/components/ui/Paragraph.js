export const Paragraph = ({ className, children, variant, font }) => {
  let UIstyle = 'text-base font-normal text-black ';
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
  if (variant === 'md') {
    UIstyle += ' text-md';
  }
  UIstyle += ` ${fontFamily} ${className}`;
  return <p className={UIstyle}>{children}</p>;
};
