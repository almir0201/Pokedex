<<<<<<< HEAD
import { cn } from '../../../lib/utils';
import { VerticalLayout } from '../VerticalLayout/VerticalLayout';
import { Paragraph } from '../Paragraph/Paragraph';

export const Footer = ({ labelRight, labelLeft, className }) => {
  return (
    <div className="container mt-auto mb-8">
      <div className={className}>
        <VerticalLayout justify="center" className="md:flex-row justify-between">
          <Paragraph variant="md" font="font-karla" className="md:order-last">
            <b>{labelRight}</b>
          </Paragraph>
          <Paragraph
            variant="md"
            font="font-karla"
            className="text-center md:order-first lg:font-bold">
            {labelLeft}
          </Paragraph>
        </VerticalLayout>
      </div>
    </div>
  );
=======
import { HorizontalLayout } from '../HorizontalLayout/HorizontalLayout';
import { cn } from '../../../lib/utils';

export const Footer = ({ children, className }) => {
  return <HorizontalLayout className={cn(className)}>{children}</HorizontalLayout>;
>>>>>>> main
};
