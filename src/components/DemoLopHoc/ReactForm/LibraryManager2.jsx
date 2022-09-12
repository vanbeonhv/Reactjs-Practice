import React, { useState } from "react";
import { ErrorMessage, Formik, Field, Form } from "formik";
import * as Yup from "yup";

const booksSchema = Yup.object().shape({
  title: Yup.string().required(),
  author: Yup.string().required(),
  quantity: Yup.number()
    .min(1)
    .max(100)
    .required(),
});
const LibraryManager2 = () => {
  const [form, setForm] = useState({ title: "", author: "", quantity: "" });
  const [bookshelf, setBooksShelf] = useState([
    { title: "Rung Than Khoc", author: "Thuc Linh", quantity: 3 },
    { title: "Khe Uoc Ban Dau", author: "Mai Mun", quantity: 5 },
  ]);
  const [mode, setMode] = useState({ mode: "add", action: "submit" });
  const deleteBook = (index) => {
    const newBookshelf = bookshelf.filter((currentValue, key) => key !== index);
    setBooksShelf(newBookshelf);
  };

  const editBook = (index) => {
    setMode({ mode: "edit", action: "Edit" });
    setForm(bookshelf[index]);
    console.log();
  };
  return (
    <div className="container">
      <Formik
        initialValues={form}
        validationSchema={booksSchema}
        onSubmit={(value, { resetForm }) => {
          switch (mode) {
            case "add":
              setBooksShelf(...bookshelf, value);
              resetForm();
              break;
            case "add":
              setBooksShelf(...bookshelf, value);
              resetForm();
              break;
          }
        }}
      >
        <Form>
          <Field
            name="title"
            placeholder="Enter a title"
            value={form.title || ""}
          />
          <br />
          <ErrorMessage component="div" className="text-danger" name="title" />
          <br />

          <Field
            name="author"
            placeholder="Enter an author"
            value={form.author || ""}
          />
          <br />
          <ErrorMessage component="div" className="text-danger" name="author" />
          <br />

          <Field
            name="quantity"
            placeholder="Enter the quantity"
            value={form.quantity || ""}
          />
          <br />
          <ErrorMessage
            component="div"
            className="text-danger"
            name="quantity"
          />

          <button type="submit" className="mb-4 btn btn-success">
            {mode.action}
          </button>
          <button type="reset" className="mb-4 btn btn-secondary">
            Reset
          </button>
        </Form>
      </Formik>
      <table className="table table-hover table-triped table-bordered">
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Tác giả</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {bookshelf.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity}</td>
              <td>
                <button
                  className="btn btn-primary mx-1"
                  onClick={() => editBook(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => deleteBook(index)}
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
