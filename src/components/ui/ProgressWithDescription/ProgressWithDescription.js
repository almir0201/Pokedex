import { Paragraph } from '../Paragraph/Paragraph';
import { Progressbar } from '../Progressbar/Progressbar';
import { cn } from '../../../lib/utils';

export const ProgressWithDescription = ({ title, label, value, className }) => {
  return (
    <div className={cn('pb-1 text-white', className)}>
      <Paragraph className="font-normal leading-5" font="font-karla">
        {title}
      </Paragraph>
      <Paragraph className="font-bold leading-5 mb-1" font="font-karla">
        {label}
      </Paragraph>
      <Progressbar currentValue={value} />
    </div>
  );
};
