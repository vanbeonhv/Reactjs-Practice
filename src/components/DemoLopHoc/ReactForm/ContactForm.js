import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const ContactForm = () => {
  const phoneRegex = RegExp(
    /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/
  );
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(25, "Must be 25 characters or less")
          .required("Name required"),
        email: Yup.string()
          .email("Invalid email address")
          .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
          .required("Email Required"),
        phone: Yup.string()
          .matches(phoneRegex, "Invalid phone")
          .required("Phone number required"),
        message: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        alert("Add contact successfully!!!");
        setSubmitting(false);
        console.log("submitted");
      }}
    >
      <Form className="ms-3">
        <h1>Contact Form</h1>
        <label htmlFor="name">Name</label>
        <br />
        <Field name="name" type="text" />
        <br />
        <ErrorMessage
          component="div"
          className="text-danger fs-6"
          name="name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <Field name="email" type="email" />
        <br />
        <ErrorMessage
          component="div"
          className="text-danger fs-6"
          name="email"
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <Field name="phone" type="number" />
        <br />
        <ErrorMessage
          component="div"
          className="text-danger fs-6"
          name="phone"
        />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <Field name="message" as="textarea" style={{ width: "190px" }} />
        <br />
        <ErrorMessage
          component="div"
          className="text-danger fs-6"
          name="message"
        />
        <br />

        <button type="submit" className="btn btn-primary shadow-none">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
