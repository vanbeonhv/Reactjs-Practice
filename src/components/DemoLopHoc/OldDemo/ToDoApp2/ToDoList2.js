import React, { Component } from "react";
import Button from "../Button";
import Input from "../Input";

export default class ToDoList2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: "",
      todos: [],
    };
  }
  handleChange = (e) => {
    this.setState({ currentTodo: e.target.value });
  };

  handleAdd = () => {
    this.setState({
      todos: [...this.state.todos, this.state.currentTodo],
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="container pt-4">
        <h3>Todo list</h3>
        <Input
          className="p-1"
          onChange={this.handleChange}
          placeholder={"Enter work to do"}
        />
        <Button
          label="Add"
          className="btn btn-info p-1 ms-1"
          onClick={this.handleAdd}
        />
        <hr />
        <ol>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ol>
      </div>
    );
  }
}
