import { Input } from './Input';

export const FilterStat = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <Input placeholder="70 000" variant="sm" label="From" />

      <p className="border-b-2 mt-6 w-6" />

      <Input placeholder="50 000" variant="sm" label="To" />
    </div>
  );
};
