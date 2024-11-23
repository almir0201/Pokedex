import { Headline } from '../Headline/Headline';
import { cn } from '../../../lib/utils';

export const SectionTitle = ({ title, className }) => {
  return (
    <>
      <div className="hidden md:block">
        <Headline
          className={cn(`text-white w-full border-b border-white tracking-widest`, className)}
          type="h1">
          {title}
        </Headline>
      </div>
      <div className="block md:hidden">
        <Headline
          className={cn(`text-white w-full border-b border-white tracking-widest`, className)}
          type="h4">
          {title}
        </Headline>
      </div>
    </>
  );
};
