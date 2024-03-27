import { Paragraph } from '../Paragraph/Paragraph';
import { cn } from '../../../lib/utils';

<<<<<<< HEAD
export const Button = ({ children, variant = 'default', className }) => {
=======
export const Button = ({ children, variant = 'default', textVariant, className }) => {
>>>>>>> ce8676969e6c5fb8edf19426e04cd81b1d2e5e1c
  return (
    <button
      className={cn('rounded-xl text-center shadow-2xs px-9 py-5', className, {
        'bg-gold': variant === 'special',
        'bg-success': variant === 'default'
      })}>
      <Paragraph variant={textVariant}>{children}</Paragraph>
    </button>
  );
};
