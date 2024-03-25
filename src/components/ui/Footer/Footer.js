import { cn } from '../../../lib/utils';
import { VerticalLayout } from '../VerticalLayout/VerticalLayout';
import { Paragraph } from '../Paragraph/Paragraph';

export const Footer = ({ labelRight, labelLeft, className, width }) => {
  return (
    <div className="container">
      <div className={cn(className)}>
        <VerticalLayout justify="center" className="md:flex-row justify-between">
          <Paragraph variant="md" font="font-karla" className="md:order-last">
            <b>{labelRight}</b>
          </Paragraph>
          <Paragraph
            variant="md"
            font="font-karla"
            className={`text-center md:order-first ${width > 1535 ? 'font-bold' : 'font-normal'}`}>
            {labelLeft}
          </Paragraph>
        </VerticalLayout>
      </div>
    </div>
  );
};
