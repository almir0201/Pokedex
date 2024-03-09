import { cn } from '../../../lib/utils';

export const Spacer = ({ className, variant = 'default' }) => {
  return (
    <div
      className={cn(className, {
        'py-1': variant === 's',
        'py-2': variant === 'default',
        'py-3': variant === 'm',
        'py-4': variant === 'l',
        'py-5': variant === 'xl'
      })}></div>
  );
};
