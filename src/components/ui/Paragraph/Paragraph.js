import { cn } from '../../../lib/utils';

export const Paragraph = ({ className, children, variant = 'default', font, lineHeight }) => {
  let fontFamily = font ?? 'font-roboto';
  return (
    <p
      className={cn('text-base font-normal', fontFamily, lineHeight, className, {
        'text-xl': variant === 'xl',
        'text-xs': variant === 'xs',
        'text-sm': variant === 'sm',
        'text-lg': variant === 'lg',
        'text-base': variant === 'default',
        'text-md': variant === 'md',
        'leading-7': lineHeight === 'leading',
        'text-2xl': variant === '2xl'
      })}>
      {children}
    </p>
  );
};
