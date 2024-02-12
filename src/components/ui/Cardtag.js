import { Paragraph } from './Paragraph';

export const Cardtag = ({ variant, children }) => {
  let UIstyle = 'bg-green rounded-small text-center shadow-sm';
  if (variant === 'grass') {
    UIstyle += ' bg-grass rounded-small';
  }
  if (variant === 'poison') {
    UIstyle += ' bg-poison rounded-small';
  }
  return (
    <div className={UIstyle}>
      <Paragraph variant="xs">{children}</Paragraph>
    </div>
  );
};
