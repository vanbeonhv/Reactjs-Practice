import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../Button";

export default class StudentManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: {
        name: "",
        phone: "",
        email: "",
      },
      isValid: false,
      indexSelected: -1,
    };
  }

  handleChange = (e) => {
    const { form } = this.state;
    this.setState(
      (state) => {
        form[e.target.name] = e.target.value; //Confused. Need to revisit!
        return { form };
      },
      () => this.checkValidForm()
    ); //Confused. Need to revisit!!
  };

  handleSubmit = () => {
    const { studentList, form, isValid } = this.state;
    if (isValid) {
      studentList.push({
        name: form.name,
        phone: form.phone,
        email: form.email,
      });
      this.setState({ studentList: studentList });
    } else {
      alert("Pls fill the box");
    }
  };

  checkValidForm = () => {
    const { name, phone, email } = this.state.form;
    let value = !!(name && phone && email); // !! to convert value from string to boolean
    this.setState({ isValid: value });
  };

  handleEdit = (studentSelected, index) => {
    // this.setState({
    //   form: JSON.parse(JSON.stringify(studentSelected)),
    //   indexSelected: index,
    // });
    // console.log(studentSelected, index);
  };
  //  VALIDATE TIME!
  render() {
    return (
      <div className="bg-light vh-100 px-5">
        <h1>Student List</h1>
        <div className="d-flex my-1">
          <p className="m-0" style={{ width: "60px" }}>
            Name:
          </p>
          <input
            name="name"
            onChange={this.handleChange}
            type="text"
            maxLength="25"
          />
        </div>
        <div className="d-flex my-1">
          <p className="m-0" style={{ width: "60px" }}>
            Phone:
          </p>
          <input
            name="phone"
            onChange={this.handleChange}
            type="number"
            maxLength="15"
          />
        </div>
        <div className="d-flex my-1">
          <p className="m-0" style={{ width: "60px" }}>
            Email:
          </p>
          <input
            name="email"
            onChange={this.handleChange}
            type="email"
            maxLength="25"
          />
        </div>
        <button
          className="btn btn-info shadow-none"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentList.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    className="btn btn-warning shadow-none p-1 mx-1"
                    onClick={this.handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-warning shadow-none p-1 mx-1"
                    onClick={this.handleDelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
