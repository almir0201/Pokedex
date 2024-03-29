import { Paragraph } from '../Paragraph/Paragraph';
import { cn } from '../../../lib/utils';

export const Button = ({ children, variant = 'default', className }) => {
  return (
    <button
      className={cn('rounded-xl text-center shadow-2xs px-9 py-5', className, {
        'bg-gold': variant === 'special',
        'bg-success': variant === 'default',
        'bg-success shadow-none px-4 pb-2px pt-2px': variant === 'xs'
      })}>
      <Paragraph variant={variant}>{children}</Paragraph>
    </button>
  );
};
