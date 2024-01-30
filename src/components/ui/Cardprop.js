import { Paragraph } from './Paragraph';

export const Cardprop = ({ stat, value }) => {
  return (
    <>
      <div className="relative rounded-full border-dark border-3 h-0 pb-[100%]">
        <span className="absolute inset-large">{value}</span>
      </div>
      <Paragraph className="text-center mt-2">{stat}</Paragraph>
    </>
  );
};
