import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const LibraryManager2 = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    quantity: "",
  });
  return (
    <div className="mx-3">
      <Formik initialValues={{ form }}>
        <Form>
          <h1>Library</h1>
          <label htmlFor="title">Tiêu đề</label>
          <br />
          <Field name="title"></Field>
          <br />
          <label htmlFor="author">Tác giả</label>
          <br />
          <Field name="author"></Field>
          <br />
          <label htmlFor="quantity">Số lượng</label>
          <br />
          <Field name="quantity"></Field>
          <br />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
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
          <tr>
            <td>Rich Dad Poor Dad</td>
            <td>Robert Kiyosaki</td>
            <td>5</td>
            <td>
              <button className="btn btn-primary mx-1">Edit</button>
              <button className="btn btn-danger mx-1">Delelte</button>
            </td>
          </tr>
          <tr>
            <td>Think and grow rich</td>
            <td>Napoleon Hill</td>
            <td>3</td>
            <td>
              <button className="btn btn-primary mx-1">Edit</button>
              <button className="btn btn-danger mx-1">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LibraryManager2;
