import { Checkbox } from './Checkbox';

export const Types = ({ data }) => {
  return (
    <>
      {data.length ? (
        <div>
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
