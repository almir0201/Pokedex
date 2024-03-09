import { Input } from '../Input/Input';
import { cn } from '../../../lib/utils';

export const FilterStat = ({ variant, className, from, to }) => {
  return (
    <div className={cn('flex justify-between items-center gap-4', className)}>
      <Input placeholder={from.placeholder} variant={variant} label={from.label} />

      <span className="bg-black mt-6 h-[2px] w-6" />

      <Input placeholder={to.placeholder} variant={variant} label={to.label} />
    </div>
  );
};
