import React from "react";

const Result = ({ result }) => {
  const costEffective = result.costEffective;
  const better = result.better;
  const worse = result.worse;

  return costEffective ? (
    <>
      <h2>Result</h2>
      <p>{costEffective} is more cost-effective</p>
      <p>
        {better.name} costs {better.price}/{better.unit}
      </p>
      <p>
        {worse.name} costs {worse.price}/{worse.unit}
      </p>
    </>
  ) : (
    <></>
  );
};

export default Result;
