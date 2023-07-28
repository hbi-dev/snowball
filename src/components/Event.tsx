import React from "react";

const Event = ({ item }) => {
  return (
    <div className='card'>
      <div className='content'>
        <p>{item?.team}</p>
        <br />
        <p>{item?.application}</p>
        <br />
        <p>{item?.name}</p>
        <br />
        <p>{item?.timestamp}</p>
      </div>
      <div className={item?.timestamp ? "success" : "error"}></div>
    </div>
  );
};

export default Event;
