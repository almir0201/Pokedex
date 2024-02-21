import { Checkbox } from './Checkbox';

export const Types = ({ data, className }) => {
  if (!data.length) return null;
  return (
    <div className={className}>
      {data.map((type) => {
        return <Checkbox label={type} key={`${type}-checkbox`} />;
      })}
    </div>
  );
};
