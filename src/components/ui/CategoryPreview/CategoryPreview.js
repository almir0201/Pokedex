import { VerticalLayout } from '../VerticalLayout/VerticalLayout';
import { AspectRatio } from '../AspectRatio/AspectRatio';
import { cn } from '../../../lib/utils';

export const CategoryPreview = ({ image: { src: imgSrc, alt: imgAlt }, children, className }) => {
  return (
    <VerticalLayout className={cn('mx-6 items-center md:flex-row md:justify-between', className)}>
      <div className="w-full max-w-[380px] my-auto">
        <AspectRatio variant="9/8">
          <img src={imgSrc} alt={imgAlt} />
        </AspectRatio>
      </div>
      {children}
    </VerticalLayout>
  );
};
