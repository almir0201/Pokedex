import { Paragraph } from './Paragraph';

export const Cardprop = ({ label, value, className }) => {
  return (
    <div className={className}>
      <div className="relative rounded-full border-dark border-3 h-0 pb-[100%]">
        <span className="absolute inset-large text-dark">{value}</span>
      </div>
      <Paragraph variant="xs" font="font-karla" className="text-center text-xs text-darkGray mt-2">
        {label}
      </Paragraph>
    </div>
  );
};
