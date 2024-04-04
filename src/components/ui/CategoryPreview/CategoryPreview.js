import { VerticalLayout } from '../VerticalLayout/VerticalLayout';
import { Paragraph } from '../Paragraph/Paragraph';
import { AspectRatio } from '../AspectRatio/AspectRatio';
import { Headline } from '../Headline/Headline';
import { ProgressWithDescription } from '../ProgressWithDescription/ProgressWithDescription';
import { Grid } from '../Grid/Grid';
import { cn } from '../../../lib/utils';

export const CategoryPreview = ({
  image: { src: imgSrc, alt: imgAlt },
  title,
  label,
  progressArray,
  className
}) => {
  if (!progressArray.length) return null;
  return (
    <VerticalLayout className={cn('mx-6 items-center md:flex-row md:justify-between', className)}>
      <div className="w-full max-w-[380px] my-auto">
        <AspectRatio variant="9/8">
          <img src={imgSrc} alt={imgAlt} />
        </AspectRatio>
      </div>
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
    </VerticalLayout>
  );
};
