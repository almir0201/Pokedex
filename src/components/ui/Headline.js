import { cn } from '../../lib/utils';

export const Headline = ({ className, variant = 'h1', label }) => {
  return (
    <h
      className={cn('font-normal font-karla text-white', className, {
        'text-7xl': variant === 'h1',
        'text-6xl': variant === 'h2',
        'text-5xl': variant === 'h3',
        'text-4xl': variant === 'h4',
        'text-3xl': variant === 'h5',
        'text-2xl': variant === 'h6'
      })}>
      {label}
    </h>
  );
};
