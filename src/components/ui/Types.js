import { Checkbox } from './Checkbox';

export const Types = ({ data }) => {
  return (
    <>
    { data.length ?
      <div className="grid grid-rows-6 grid-flow-col gap-1 md:grid-flow-row">
        {data.map((type) => {
          return (
            <Checkbox
              className=""
              label={type}
              key={`${type}-checkbox`}
            />)
        })}
      </div> :
      <></>
    }
    </>
  );
};
