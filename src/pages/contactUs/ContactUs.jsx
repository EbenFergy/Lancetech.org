import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactUsStyle from './ContactUsStyle.js';
import { HeaderStyle } from '../HomePage/Header/HeaderStyle.jsx';
import TorusImage from '../../assets/Torus.svg';
import EllipseImage from '../../assets/Ellipse.svg';
import Header2 from '../../assets/Header2.svg';
import Header1 from '../../assets/Header1.svg';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { FormCont } from '../../components/Formik/FormStyle.jsx';
import FormikControl from '../../components/Formik/FormikControl.js';

const ContactUs = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    yourName: '',
    yourEmail: '',
    phoneNumber: '',
  };

  const validationSchema = Yup.object({
    yourName: Yup.string().required('Please put in your name'),
    yourEmail: Yup.string().email('Enter valid email').required('Required'),
    phoneNumber: Yup.string().required('phone number is not valid'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('values from Testimonial Form', values);
    resetForm({ values: '' });
  };

  return (
    <ContactUsStyle>
      <Box className="contactUsLeft" sx={{}}>
        <FormCont>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {formik => {
              return (
                <Form>
                  <FormikControl control="input" name="yourName" label="yourName" placeholder="Your Name" />;
                  <FormikControl control="input" name="yourEmail" label="yourEmail" placeholder="Your Email" />;
                  <FormikControl control="input" name="phoneNumber" label="phoneNumber" placeholder="Phone Number" />;
                </Form>
              );
            }}
          </Formik>
        </FormCont>
      </Box>
      <Box className="contactUsRight">
        <img src={Header1} style={{ width: '80%' }} />
      </Box>
    </ContactUsStyle>
  );
};

export default ContactUs;
