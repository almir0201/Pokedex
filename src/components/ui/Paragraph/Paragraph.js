import { cn } from '../../../lib/utils';

export const Paragraph = ({ className, children, variant, font }) => {
  let fontFamily = font ?? 'font-roboto';
  return (
    <p
      className={cn('text-base font-normal text-black', fontFamily, className, {
        'text-xl hover:underline underline-offset-[15px]': variant === 'xl',
        'text-sm text-dark': variant === 'xs',
        'text-lg text-dark': variant === 'lg',
        'text-md': variant === 'md'
      })}>
      {children}
    </p>
  );
};
