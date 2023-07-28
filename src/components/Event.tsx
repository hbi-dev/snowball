import { timeStamp } from "console";
import React from "react";

const Event = ({ skuEvent }) => {

  const cleanedDate = (timeStamp: Date) => {
    console.log(new Date(timeStamp));
    return new Date(timeStamp).toLocaleString();
  }

  return (
    <div className='card'>
      <div className='content'>
        <p>{skuEvent?.team}</p>
        <br />
        <p>{skuEvent?.application}</p>
        <br />
        <p>{skuEvent?.name}</p>
        <br />
        <p>{cleanedDate(skuEvent?.timestamp)}</p>
      </div>
      <div className={skuEvent?.timestamp ? "success" : "error"} id="status"></div>
    </div>
  );
};

export default Event;
