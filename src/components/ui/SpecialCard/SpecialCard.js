import { AspectRatio } from '../AspectRatio/AspectRatio';
import { CardTitle } from '../CardTitle/CardTitle';

export const SpecialCard = ({ title, icon, imageSrc, imageAlt }) => {
  return (
    <div className="bg-primary rounded-2xl">
      <div className="relative -top-5 -mx-4 -mb-10">
        <AspectRatio variant="1/1">
          <img src={imageSrc} alt={imageAlt} />
        </AspectRatio>
      </div>
      <CardTitle title={title} icon={icon} />
    </div>
  );
};
