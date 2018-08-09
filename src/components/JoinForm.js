import React from "react";
import { withFormik, Field, Form } from "formik";
import Yup from "yup";

const JoinForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    <div className="joinForm">
      <div className="joinForm__email">
        <Field
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={values.email}
        />
        <div className="joinForm__email-error">
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>
      </div>
      <div className="joinForm__password">
        <Field
          type="password"
          name="password"
          placeholder="비밀번호 9자리 이상을 입력해주세요"
          value={values.password}
        />
        <div className="joinForm__password-error">
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
      </div>
      <div className="joinForm__business">
        <Field component="select" name="business">
          <option value="exercise">Exercise</option>
          <option value="music">Music</option>
          <option value="language">language</option>
        </Field>
      </div>
      <button type="submit">회원가입</button>
    </div>
  </Form>
);

const JoinFormik = withFormik({
  mapPropsToValues({ email, password, business }) {
    return {
      email: email || "",
      password: password || "",
      business: business || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("email을 입력해주세요.")
      .required(),
    password: Yup.string()
      .min(9, "9자 이상 입력해주세요.")
      .required()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
    setSubmitting(false);
  }
})(JoinForm);

export default JoinFormik;
