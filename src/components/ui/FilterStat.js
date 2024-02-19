import { Input } from './Input';
import { Spacer } from './Spacer';

export const FilterStat = () => {
  return (
    <div className="md:flex justify-between items-center gap-4">
      <Input
        placeholder="70 000"
        variant="sm"
        label="From"
        labelClassName="pl-4 mb-1 text-xs font-roboto"
      />
      <Spacer />
      <Input
        placeholder="50 000"
        variant="sm"
        label="To"
        labelClassName="pl-4 mb-1 text-xs font-roboto"
      />
    </div>
  );
};
