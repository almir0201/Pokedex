import { Input } from './Input';
import { cn } from '../../lib/utils';

export const FilterStat = ({
  variant,
  className,
  labelFrom,
  labelTo,
  placeholderFrom,
  placeholderTo
}) => {
  return (
    <div className={cn('flex justify-between items-center gap-4', className)}>
      <Input placeholder={placeholderFrom} variant={variant} label={labelFrom} />

      <span className="bg-black mt-6 h-[2px] w-6" />

      <Input placeholder={placeholderTo} variant={variant} label={labelTo} />
    </div>
  );
};
