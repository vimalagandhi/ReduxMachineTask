import React from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import { Redirect } from 'react-router';

const ValidatedLoginForm = (props) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 500);

      if (values.email !== "hruday@gmail.com") {
        alert("Username is not valid");
        return false;
      } else if (values.password !== "hruday123") {
        alert("Password is not valid");
        return false;
      }
      else {
        return setTimeout(() => props.history.push("/emp"), 500)
      }

    }}


    validationSchema={yup.object().shape({

    })}
  >

    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <form onSubmit={handleSubmit}>
          <div className="form-label-group  mx-10">
            <label htmlFor="email">Username</label>
            <input
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.email && touched.email ? 'error' : ''}`}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
          </div>

          <div className="form-label-group  mx-10">
            <label htmlFor="email">Password</label>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.password && touched.password ? 'error' : ''}`}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
          </div>

          <button type="submit" className="btn btn-lg btn-primary btn-block text-uppercase mx-10" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
);
export default ValidatedLoginForm;
