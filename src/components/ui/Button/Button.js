import { Paragraph } from '../Paragraph/Paragraph';
import { cn } from '../../../lib/utils';

export const Button = ({ children, variant = 'default' }) => {
  return (
    <button
      className={cn('rounded-xl text-center shadow-2xs px-9 py-5', {
        'bg-gold': variant === 'special',
        'bg-success': variant === 'default'
      })}
      variant={variant}>
      <Paragraph variant="lg">{children}</Paragraph>
    </button>
  );
};
