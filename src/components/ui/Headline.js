import { cn } from '../../lib/utils';

export const Headline = ({ className, variant }) => {
  return (
    <p
      className={cn('font-normal text-7xl font-karla text-white', className, {
        'text-xxxl': variant === 'md',
        'text-xxl': variant === 'sm,'
      })}></p>
  );
};
