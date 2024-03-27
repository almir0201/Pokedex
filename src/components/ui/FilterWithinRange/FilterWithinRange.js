import { CardContentContainer } from '../CardContentContainer/CardContentContainer';
import { FilterStat } from '../FilterStat/FilterStat';
import { Paragraph } from '../Paragraph/Paragraph';
import { Button } from '../Button/Button';
import { Spacer } from '../Spacer/Spacer';
import { VerticalLayout } from '../VerticalLayout/VerticalLayout';

export const FilterWithinRange = ({
  label,
  from,
  to,
  variant,
  className,
  button: { onClick, label: buttonLabel }
}) => {
  return (
    <VerticalLayout className={className}>
      <Paragraph variant="lg">{label}</Paragraph>
      <Spacer variant="s" />
      <CardContentContainer>
        <Spacer />
        <VerticalLayout align="end" className="ml-3 mr-6">
          <FilterStat from={from} to={to} variant={variant} />
          <Button
            className="shadow-none px-4 pb-2px pt-2px mt-5 ml-auto"
            variant="xs"
            onClick={onClick}>
            {buttonLabel}
          </Button>
        </VerticalLayout>
        <Spacer />
      </CardContentContainer>
    </VerticalLayout>
  );
};
