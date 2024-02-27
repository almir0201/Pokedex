import { AspectRatio } from './AspectRatio';
import { CardTitle } from './CardTitle';

export const SpecialCard = ({ title, icon, children }) => {
  return (
    <div>
      <div className="relative bg-primary rounded-2xl mx-14 my-5">
        <div className="relative -top-5 -mx-4 -mb-10">
          <AspectRatio variant="1/1">
            <img src={children} alt={children} />
          </AspectRatio>
        </div>
        <div>
          <CardTitle title={title} icon={icon} />
        </div>
      </div>
    </div>
  );
};
