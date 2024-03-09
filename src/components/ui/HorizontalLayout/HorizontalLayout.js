import { cn } from '../../../lib/utils';

export const HorizontalLayout = ({ children, align, justify, className }) => {
  return (
    <div
      className={cn('flex', className, {
        'items-start': align === 'start',
        'items-end': align === 'end',
        'items-center': align === 'center',
        'justify-center': justify === 'center',
        'justify-start': justify === 'start',
        'justify-end': justify === 'end'
      })}>
      {children}
    </div>
  );
};
