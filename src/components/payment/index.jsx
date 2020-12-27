import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Payment = ({submit, setFormValues,previousValues}) => {
  return (
    <Formik
      initialValues={previousValues}
      validationSchema={Yup.object({
        cardName: Yup.string()
        .min(5, 'Must be greater than 5')
          .max(15, 'Must be 15 characters or less')
          .required('Required Necessary'),
        cardNumber: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Required Necessary '),
        
      })}
      onSubmit={(values) => {
        submit(2)
        setFormValues({...values,...previousValues})
      }}
    >
      <Form>
        <label htmlFor="cardName">Card Name</label>
        <Field name="cardName" type="text" />
        <ErrorMessage name="cardName" />
        <label htmlFor="cardNumber">Card Number</label>
        <Field name="cardNumber" type="text" />
        <ErrorMessage name="cardNumber" />
        <button onClick={()=>submit(0)} >Back</button>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};