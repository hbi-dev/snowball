import React from "react";
import Event from "./Event";

const Display = ({ data }) => {
  return (
    <>
      <div className='displayResult'>
        {data &&
          data?.length > 0 &&
          data?.map((item: any, index: any) => {
            return <Event item={item} key={index} />;
          })}
      </div>
    </>
  );
};

export default Display;
