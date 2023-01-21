import React from "react";
import { useState } from "react";

const Time = () => {
  let time = new Date().toLocaleTimeString();
  const [Ctime, setCtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div>
      <h1>{Ctime}</h1>
    </div>
  );
};

export default Time;
