import React from "react";

const Total = ({ parts }) => {
  // return (
  //   <div>
  //     <p>Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  //   </div>
  // )
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);
  return <h4>Number of exercises {total}</h4>;
};

export default Total;
