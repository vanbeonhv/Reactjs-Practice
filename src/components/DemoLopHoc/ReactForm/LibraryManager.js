import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LibraryManager = () => {
  const [book, setBook] = useState({
    title: "",
    quantity: "",
  });

  const [books, setBooks] = useState([]);

  const handleKeyUp = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
    console.log(book);
  };

  const handleClick = () => {
    console.log(book);
    let inputValues = Object.values(book);
    console.log(inputValues);
    let isEmpty = inputValues.every((value) => value !== "");
    if (isEmpty) {
      setBooks((prev) => {
        const newBooks = [...prev, book];
        return newBooks;
      });
    }
    console.log(books);
  };
  return (
    <div className="ms-3">
      <Formik
        initialValues={{ title: "", quantity: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          quantity: Yup.string().required("Number is required"),
        })}
        onSubmit={() => {}}
      >
        <Form>
          <h1>Library</h1>
          <label htmlFor="title">Tiêu đề</label>
          <br />
          <Field
            name="title"
            type="text"
            // value={book.title}
            onKeyUp={handleKeyUp}
          ></Field>
          <br />
          <ErrorMessage
            name="title"
            component="p"
            className="m-0 text-danger"
          />
          <br />
          <label htmlFor="quantity">Số lượng</label>
          <br />
          <Field name="quantity" type="number" onKeyUp={handleKeyUp}></Field>
          <br />
          <ErrorMessage
            name="quantity"
            component="p"
            className="m-0 text-danger"
          />
          <br />
          <button
            type="submit"
            onClick={handleClick}
            className="btn btn-info shadow-none my-2 p-1"
          >
            Submit
          </button>
        </Form>
      </Formik>
      <div className="table-responsive w-50">
        <table className="table table-striped table-bordered table-hover ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {console.log(books)}
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibraryManager;
