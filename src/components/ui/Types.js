import { Checkbox } from './Checkbox';

export const Types = ({ data, className }) => {
  return (
    <>
      {data.length ? (
        <div className={className}>
          {data.map((type) => {
            return <Checkbox label={type} key={`${type}-checkbox`} />;
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
