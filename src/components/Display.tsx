import React from "react";
import Event from "./event";

const Display = ({ data }) => {
  return (
    <>
      <div className='displayResult'>
        {data &&
          data?.length > 0 &&
          data?.map((item) => {
            return <Event item={item} />;
          })}
      </div>
    </>
  );
};

export default Display;
