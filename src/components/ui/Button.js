import { Paragraph } from './Paragraph';

export const Button = ({ children, variant }) => {
  let UIstyle = 'bg-green rounded-xl text-center shadow-xs px-9 py-5 bg-green';
  if (variant === 'gold') {
    UIstyle += ' !bg-gold';
  }

  return (
    <button className={UIstyle} variant={variant}>
      <Paragraph variant="lg">{children}</Paragraph>
    </button>
  );
};
