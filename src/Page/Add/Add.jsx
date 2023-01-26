import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './style.scss'
import Navbar from "../../Layouts/Navbar";

const SignupForm = () => {
  return ( <>

  <Navbar></Navbar>
    <Formik
      initialValues={{ name: "", category: "", price: "", imgURL: "" }}
      validationSchema={Yup.object({
       
      })}
      onSubmit={(values) => {
        axios.post("http://localhost:4444", values);
      }}
    >
      <Form>
        <label htmlFor="name"> Name</label>
        <Field name="name" type="text" />

        <label htmlFor="imgURL">ImgURL</label>
        <Field name="imgURL" type="text" />

        <label htmlFor="category">Category</label>
        <Field name="category" type="text" />

        <label htmlFor="price">Price </label>
        <Field name="price" type="text" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </>);
};
export default SignupForm;
