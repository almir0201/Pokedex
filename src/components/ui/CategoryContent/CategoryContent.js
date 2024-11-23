import { VerticalLayout } from '../VerticalLayout/VerticalLayout';
import { Headline } from '../Headline/Headline';
import { Paragraph } from '../Paragraph/Paragraph';
import { Grid } from '../Grid/Grid';
import { ProgressWithDescription } from '../ProgressWithDescription/ProgressWithDescription';

export const CategoryContent = ({ title, label, progressArray }) => {
  if (!progressArray.length) return null;
  return (
    <VerticalLayout className="max-w-[413px]">
      <Headline type="h1" className="tracking-widest hidden lg:block">
        {title}
      </Headline>
      <Headline type="h2" className="tracking-widest block lg:hidden">
        {title}
      </Headline>
      <Paragraph className="text-white hidden lg:block" font="font-sanspro">
        {label}
      </Paragraph>
      <Paragraph variant="sm" className="text-white block lg:hidden" font="font-sanspro">
        {label}
      </Paragraph>
      <Grid cols={2} className="gap-3 lg:gap-10 mt-8">
        {progressArray.map((data, index) => (
          <ProgressWithDescription
            title={data.title}
            label={data.label}
            value={data.value}
            key={index}
          />
        ))}
      </Grid>
    </VerticalLayout>
  );
};
