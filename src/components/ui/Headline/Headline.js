import { cn } from '../../../lib/utils';

export const Headline = ({ children, as: Component = 'h1', type = 'h1', className }) => (
  <Component
    className={cn(
      [
        `text-headline-${type} leading-headline-${type} tracking-headline-${type}`,
        'font-normal font-karla text-white'
      ],
      className,
      {
        'text-7xl': type === 'h1',
        'text-6xl': type === 'h2',
        'text-5xl': type === 'h3',
        'text-4xl': type === 'h4',
        'text-3xl': type === 'h5',
        'text-2xl': type === 'h6'
      }
    )}>
    {children}
  </Component>
);
