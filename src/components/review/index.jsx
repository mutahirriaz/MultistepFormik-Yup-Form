import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Review = ({values,submit}) => {
  return (
   <div>
       <p>Area: {values.area} </p>
       <p>City: {values.city} </p>
       <p>Email: {values.email} </p>
       <p>CardNumber: {values.cardNumber} </p>
       <p>CardName: {values.cardName} </p>
       <button onClick={()=>submit(1)} >Back</button>
   </div>
  );
};