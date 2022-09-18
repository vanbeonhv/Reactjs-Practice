import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginCore = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .max(12)
      .required(),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const navigate = useNavigate();
  return (
    <div className="container">
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={loginSchema}
        onSubmit={(value, { resetForm }) => {
          if (
            value.username === "admin@gmail.com" &&
            value.password === "letmein"
          ) {
            navigate("/home", { state: form });
            setForm({ username: "", password: "" });
          } else {
            alert("Please enter an valid username or password");
          }
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <br />
          <Field
            name="username"
            type="text"
            value={form.username || ""}
            onChange={handleChange}
          />
          <br />
          <ErrorMessage
            name="username"
            component="div"
            className="text-danger"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <Field
            name="password"
            type="password"
            value={form.password || ""}
            onChange={handleChange}
          />
          <br />
          <ErrorMessage
            name="password"
            component="div"
            className="text-danger"
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginCore;
