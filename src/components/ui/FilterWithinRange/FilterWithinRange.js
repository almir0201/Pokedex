import { CardContentContainer } from '../CardContentContainer/CardContentContainer';
import { FilterStat } from '../FilterStat/FilterStat';
import { Paragraph } from '../Paragraph/Paragraph';
import { Button } from '../Button/Button';
import { Spacer } from '../Spacer/Spacer';
import { VerticalLayout } from '../VerticalLayout/VerticalLayout';

export const FilterWithinRange = ({ label, from, to, variant, className, onClickApply }) => {
  return (
    <VerticalLayout className={className}>
      <Paragraph className="mb-2" variant="lg">
        {label}
      </Paragraph>
      <CardContentContainer>
        <Spacer />
        <VerticalLayout align="end" className="ml-3 mr-6">
          <FilterStat from={from} to={to} variant={variant} />
          <Button
            className="shadow-none px-4 py-2px mt-5 ml-auto"
            textVariant="xs"
            onClick={onClickApply}>
            Apply
          </Button>
        </VerticalLayout>
        <Spacer />
      </CardContentContainer>
    </VerticalLayout>
  );
};
