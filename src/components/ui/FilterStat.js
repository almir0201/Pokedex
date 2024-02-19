import { Input } from './Input';

export const FilterStat = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="w-full">
        <label className="pl-4 mb-1">From</label>
        <Input className="bg-stone-300" placeholder="70 000" />
      </div>

      <p className="text-xl border w-full max-w-[25px] mt-6" />

      <div className="w-full">
        <label className="pl-4 mb-1">To</label>
        <Input className="bg-stone-300" placeholder="50 000" />
      </div>
    </div>
  );
};
