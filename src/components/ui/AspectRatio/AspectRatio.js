import { cn } from '../../../lib/utils';

export const AspectRatio = ({ children, variant, className }) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden [&>*]:absolute [&>*]:left-0 [&>*]:w-full [&>*]:h-full [&>*]:object-contain',
        className,
        {
          'pb-[100%]': variant === '1/1',
          'pb-[56.25%]': variant === '16/9',
          'pb-[64.28%]': variant === '14/9',
          'pb-[75%]': variant === '4/3',
          'pb-[133.33%]': variant === '3/4',
          'pb-[112.5%]': variant === '9/8',
          'pb-[90%]': variant === '10/9'
        }
      )}>
      {children}
    </div>
  );
};
