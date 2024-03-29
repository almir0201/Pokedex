import { Headline } from '../Headline/Headline';
import { cn } from '../../../lib/utils';

export const SectionTitle = ({ title, className, type }) => {
  return (
    <Headline
      className={cn(`text-white w-full border-b border-white tracking-widest`, className)}
      type={type}>
      {title}
    </Headline>
  );
};
