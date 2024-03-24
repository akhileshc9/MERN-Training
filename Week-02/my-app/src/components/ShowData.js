import React from "react";

export default function ShowData(props) {
  return (
    <div>
      {props.sdata.map((udata) => (
        <div>
          {udata.username} -- {udata.email}
        </div>
      ))}
    </div>
  );
}
