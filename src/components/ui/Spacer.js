import { cn } from '../../lib/utils';

export const Spacer = ({ className, variant = 'default' }) => {
  return (
    <div
      className={cn(className, {
        'my-2': variant === 's',
        'my-3': variant === 'default',
        'my-4': variant === 'm',
        'my-5': variant === 'l',
        'my-6': variant === 'xl'
      })}></div>
  );
};
