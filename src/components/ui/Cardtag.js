import { Paragraph } from './Paragraph';
import { cn } from '../../lib/utils';

export const Cardtag = ({ variant, children }) => {
  return (
    <div
      className={cn('bg-success rounded-xl text-center shadow-sm', {
        'bg-poison': variant === 'poison'
      })}>
      <Paragraph variant="xs">{children}</Paragraph>
    </div>
  );
};
