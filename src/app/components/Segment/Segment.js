import React from "react";
import "./Segment.scss";

const Segment = props => {
  //   const userData = Object.keys(props.data).map((user, index) => {
  //     return (
  //       <li key={index}>
  //         Name: {props.data[index].name.first} {props.data[index].name.last}
  //         Gender: {props.data[index].gender}
  //         Phone Number: {props.data[index].phone}
  //       </li>
  //     );
  //   });
  return (
    <div className="segment-wrapper">
      <span className="segment">{props.title}</span>
    </div>
  );
};

export default Segment;
