import { Paragraph } from './Paragraph';

export const Cardtag = ({ variant, children }) => {
  let UIstyle = 'bg-green rounded-xl text-center shadow-sm';
  if (variant === 'grass') {
    UIstyle += ' bg-grass rounded-xl';
  }
  if (variant === 'poison') {
    UIstyle += ' bg-poison rounded-xl';
  }
  return (
    <div className={UIstyle}>
      <Paragraph variant="xs">{children}</Paragraph>
    </div>
  );
};
