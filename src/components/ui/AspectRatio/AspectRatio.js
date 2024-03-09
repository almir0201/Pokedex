import { cn } from '../../../lib/utils';

export const AspectRatio = ({ children, variant }) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden [&>*]:absolute [&>*]:left-0 [&>*]:w-full [&>*]:h-full',
        {
          'pb-[100%]': variant === '1/1',
          'pb-[56.25%]': variant === '16/9',
          'pb-[75%]': variant === '4/3',
          'pb-[133.33%]': variant === '3/4'
        }
      )}>
      {children}
    </div>
  );
};
