import { Paragraph } from '../Paragraph/Paragraph';
import { cn } from '../../../lib/utils';

export const Button = ({ children, variant }) => {
  return (
    <button
      className={cn('bg-success rounded-xl text-center shadow-2xs px-9 py-5', {
        'bg-gold': variant === 'special'
      })}
      variant={variant}>
      <Paragraph variant="lg">{children}</Paragraph>
    </button>
  );
};
