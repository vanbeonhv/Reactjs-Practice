import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(25, "Must be 25 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
          .required("Required"),
        phone: Yup.number()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        message: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        console.log("submitted");
      }}
    >
      <Form>
        <h1>Contact Form</h1>
        <label htmlFor="name">Name</label>
        <br />
        <Field name="name" type="text" />
        <ErrorMessage name="name" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <Field name="phone" type="number" />
        <ErrorMessage name="phone" />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <Field name="message" as="textarea" style={{ width: "190px" }} />
        <ErrorMessage name="message" />
        <br />

        <button type="submit" className="btn btn-primary shadow-none">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
