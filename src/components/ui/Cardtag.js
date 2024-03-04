import { Paragraph } from './Paragraph';
import { cn } from '../../lib/utils';

export const Cardtag = ({ variant = 'default', children }) => {
  return (
    <div
      className={cn('rounded-xl text-center shadow-sm px-4', {
        'bg-poison': variant === 'poison',
        'bg-success': variant === 'default'
      })}>
      <Paragraph variant="xs">{children}</Paragraph>
    </div>
  );
};
