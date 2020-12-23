import React from "react";
import { Consumer } from "../Context";
import withHigherOrderComponent from "../hoc/hoc";

const Card = ({ user }) => {
  console.log(user);
  return (
    <>
      <Consumer>
        {(value) => (
          <div style={{ backgroundColor: value.color.block }}>
            {console.log("VALUE", value)}
            <h2>{user.name}</h2>
            <p style={{ color: value.color.text }}>Age: {user.age}</p>
            <p style={{ color: value.color.text }}>
              Status: {user.online ? "ONLINE" : "OFFLINE"}
            </p>
          </div>
        )}
      </Consumer>
    </>
  );
};

export default withHigherOrderComponent("Hello")("world")(Card);
