import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LibraryManager2 = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    quantity: "",
  });
  const [bookShelf, setBookShelf] = useState([
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", quantity: "5" },
    { title: "Think and grow rich", author: "Napoleon Hill", quantity: "7" },
  ]);

  const [mode, setMode] = useState({
    status: "add",
    action: "Submit",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (index) => {
    setMode({ status: "edit", action: "Edit" });
  };

  const handleDelete = (index) => {
    setBookShelf(bookShelf.filter((currentValue, id) => id !== index));
  };
  return (
    <div className="mx-3">
      <Formik
        initialValues={form}
        validationSchema={Yup.object().shape({
          title: Yup.string()
            .max(25, "Nhập tối đa 25 ký tự")
            .required("Hãy nhập tiêu đề!"),
          author: Yup.string()
            .max(20, "Nhập tối đa 20 ký tự")
            .required("Hãy nhập tên tác giả!"),
          quantity: Yup.number()
            .max(4, "Nhập tối đa 4 ký tự")
            .required("Hãy nhập số lượng"),
        })}
        onSubmit={(value, { resetForm }) => {
          switch (mode.status) {
            case "add":
              console.log(value);
              setBookShelf([...bookShelf, value]);
              resetForm();
              break;
            case "edit":
              setForm(bookShelf[index]);
          }
        }}
      >
        <Form>
          <h1>Library</h1>
          <label htmlFor="title">Tiêu đề</label>
          <br />
          <Field
            name="title"
            type="text"
            // value={form.title || ""}
            // onChange={handleChange}
          />
          <br />
          <ErrorMessage
            name="title"
            component="p"
            className="text-danger mb-0"
          />
          <br />
          <label htmlFor="author">Tác giả</label>
          <br />
          <Field
            name="author"
            type="text"
            // value={form.author || ""}
            // onChange={handleChange}
          />
          <br />
          <ErrorMessage
            name="author"
            component="p"
            className="text-danger mb-0"
          />
          <br />
          <label htmlFor="quantity">Số lượng</label>
          <br />
          <Field
            name="quantity"
            type="number"
            // value={form.quantity || ""}
            // onChange={handleChange}
          />
          <br />
          <ErrorMessage
            name="quantity"
            component="p"
            className="text-danger mb-0"
          />
          <br />
          <button type="submit" className="btn me-2 btn-success">
            {mode.action}
          </button>
          <button type="button" className="btn m-2 btn-warning">
            Reset
          </button>
        </Form>
      </Formik>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Tác giả</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {bookShelf.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity}</td>
              <td>
                <button
                  className="btn btn-primary mx-1"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => handleDelete(index)}
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
};

export default LibraryManager2;
