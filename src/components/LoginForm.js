import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

const LoginForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    <div>
      <Field
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
      />
    </div>
    <div>
      <Field
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
      />
    </div>

    <button disabled={isSubmitting} type="submit">
      Submit
    </button>
  </Form>
);

const FormikApp = withFormik({
  // Transform outer props into form values
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values); //email, password
    setTimeout(() => {
      if (values.email === "goosee@gmail.com") {
        setErrors({ email: "이미 있는 이메일입니다." });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(LoginForm);

export default FormikApp;
