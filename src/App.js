import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  onChange = e => {
    this.setState({ value: e.target.value });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List: MVP!</h2>
      </div>
      <TodoList />
    );
  }
}

export default App;
