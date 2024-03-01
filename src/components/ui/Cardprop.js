import { Paragraph } from './Paragraph';

export const Cardprop = ({ label, value }) => {
  return (
    <div>
      <div className="relative rounded-full border-dark border-3 h-0 pb-[100%]">
        <span className="absolute inset-large text-dark">{value}</span>
      </div>
      <Paragraph className="text-center text-xs font-roboto text-darkGray mt-2">{label}</Paragraph>
    </div>
  );
};
