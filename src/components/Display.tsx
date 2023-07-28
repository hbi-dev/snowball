import React from "react";
import Event from "./Event";

const Display = ({ data }) => {
  return (
    <>
      <div className='displayResult'>
        {data &&
          data?.length > 0 &&
          data?.map((skuEvent: any, index: any) => {
            return <Event skuEvent={skuEvent} key={index} />;
          })}
      </div>
    </>
  );
};

export default Display;
