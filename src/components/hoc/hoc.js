import React, { Component } from "react";
import { users } from "../../data";

const withHigherOrderComponent = (data1) => (data2) => (CardWithHOC) => {
  console.log(data1);
  console.log(data2);
  return class WithHigherOrderComponent extends Component {
    state = {
      users: [],
    };
    // {
    //     id: "1",
    //     name: "Alex",
    //     age: 25,
    //     online: true,
    //   }

    componentDidMount() {
      //axios.get("dfghjkl").then(users=>)
      this.setState({ users: [...users] });
    }

    changeStatus = (e) => {
      const { id } = e.target;
      this.setState((prev) => ({
        users: [
          ...prev.users.map((user) =>
            user.id === id ? { ...user, online: !user.online } : user
          ),
        ],
      }));
    };

    render() {
      return (
        <div style={{ border: "1px solid black" }}>
          <ul className='list'>
            {this.state.users.map((user) => (
              <li key={user.id}>
                <CardWithHOC user={user} />
                <button id={user.id} onClick={this.changeStatus}>
                  Change status
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };
};

export default withHigherOrderComponent;
// user={user} text='data'

// <WrappedComponent {...this.props} extraProp="This prop is from HOC" />

// function getData() {
//   const text = "Hello";
//   return function () {
//     console.log(text);
//   };
// }

// const result = getData();
// result(); //Hello

function getData() {
  return function (text) {
    console.log(text);
    return function () {
      console.log("hello");
    };
  };
}
getData()("dfghjk")();
