import React from "react";

const Result = ({ result, valid }) => {
  if (valid) {
    const costEffective = result.costEffective;
    const better = result.better;
    const worse = result.worse;

    return costEffective ? (
      <>
        <h2>Result</h2>
        <p>{costEffective} is more cost-effective</p>
        <p>
          {better.name} costs {better.value}/{better.alignedUnit}
        </p>
        <p>
          {worse.name} costs {worse.value}/{worse.alignedUnit}
        </p>
      </>
    ) : (
      <></>
    );
  } else {
    return (
      <>
        <h4>Please double-check your inputs</h4>
        <p>
          Make sure that your prices & amounts have values greater than zero.
          <br /> Also ensure that your units both measure either only mass, or
          only volume.
        </p>
      </>
    );
  }
};

export default Result;
