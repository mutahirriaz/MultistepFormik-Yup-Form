import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';


export const Address = ({submit, setFormValues,previousValues}) => {
  return (
    <Formik
      initialValues={previousValues}
      validationSchema={Yup.object({
        area: Yup.string()
        .min(10, 'Must be greater than10')
          .max(15, 'Must be 15 characters or less')
          .required('Required Necessary'),
        city: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required Necessary '),
        email: Yup.string().email('Invalid email ').required('Required'),
      })}
      onSubmit={(values) => {
        submit(1)
        setFormValues({...values})
      }}
    >
      <Form>
        <Field name="area" as={TextField} variant="outlined" label='Area Name' type="text" />
        <br/>
        <ErrorMessage name="area" />
        <br/>
        <Field name="city" as={TextField} variant="outlined" label="City Name" type="text" />
        <br/>
        <ErrorMessage name="city" />
        <br/>
        
        <Field name="email" as={TextField} variant="outlined" label="Email Address" type="email" />
        <br/>
        <ErrorMessage name="email" />
        <br/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};