import React, { Component } from "react";
import Button from "../Button";
import Input from "../Input";

export default class ToDoList3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTodo: "",
    };
  }

  handleChange = (e) => {
    this.setState({ currentTodo: e.target.value });
  };
  handleAdd = () => {
    const { todos, currentTodo } = this.state;
    if (!todos.includes(currentTodo)) {
      todos.push(currentTodo);
      this.setState({ todos: todos });
    } else {
      alert(currentTodo + " is already in the list");
    }
  };
  render() {
    return (
      <div className="container p-relative">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h2 className="text-center">Todo List</h2>
            <Input
              className="p-1"
              onChange={this.handleChange}
              placeholder="Enter work"
              style={{ outline: "none" }}
            />
            <Button
              className="btn btn-primary p-1 ms-1 shadow-none"
              label="Add"
              onClick={this.handleAdd}
            />
            <ol className="p-3">
              {this.state.todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ol>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}
