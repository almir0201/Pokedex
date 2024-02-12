import { Paragraph } from './Paragraph';

export const Button = ({ children, variant }) => {
  let UIstyle = 'bg-grass rounded-xl text-center shadow-sm px-9 py-5';

  return (
    <button className={UIstyle} variant={variant}>
      <Paragraph variant="lg">{children}</Paragraph>
    </button>
  );
};
