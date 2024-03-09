import { Paragraph } from '../Paragraph/Paragraph';
import Icon from '../../../icons/goldenPokeball.svg';

export const CardTitle = ({ title, icon }) => {
  return (
    <div className="flex justify-between items-center rounded-2xl bg-gradient-to-b from-white to-graySecond shadow-xs px-6 pt-14 pb-9">
      <Paragraph variant="lg">{title}</Paragraph>
      <img src={icon ?? Icon} alt="icon" />
    </div>
  );
};
