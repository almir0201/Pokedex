export const Headline = ({ className, variant }) => {
  let UIstyle =
    'text-base font-normal px-5 py-2 w-full text-dark placeholder-dark rounded-large bg-inputbg ';
  if (variant === 'h1') {
    // this is just example
    UIstyle += 'py-4';
  }
  UIstyle += ` ${className}`;
  return <p className={UIstyle}></p>;
};
