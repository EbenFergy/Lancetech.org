import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import ContactUsStyle from './ContactUsStyle.js';
import Header1 from '../../assets/Header1.svg';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Formik, Form } from 'formik';
import { FormCont } from '../../components/Formik/FormStyle.jsx';
import FormikControl from '../../components/Formik/FormikControl.js';
import MuiPhoneNumber from 'material-ui-phone-number';
import { Button } from '../../components/Formik/FormStyle.jsx';

const validationSchema = Yup.object({
  yourName: Yup.string().required('Please put in your name'),
  email: Yup.string().email('Enter valid email').required('Required'),
  // phoneNumber: Yup.string().optional(),
});

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      yourName: '',
      email: '',
      // phoneNumber: '',
    },

    validationSchema: validationSchema,

    onSubmit: values => {
      console.log('values from contact page Form', values);
    },

    handlePhoneNumber: e => {
      console.log('phone number', e);
    },
  });

  return (
    <ContactUsStyle>
      <Box className="contactUsLeft" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <TextField
            fullWidth
            id="yourName"
            name="yourName"
            label="Name"
            sx={{ mb: '2rem', color: 'white' }}
            value={formik.values.yourName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.yourName && Boolean(formik.errors.yourName)}
            helperText={formik.touched.yourName && formik.errors.yourName}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <MuiPhoneNumber
            fullWidth
            variant="outlined"
            defaultCountry={'us'}
            disableAreaCodes={true}
            // name="phoneNumber"
            label="Phone number"
            // value={formik.values.phoneNumber}
            onChange={formik.handlePhoneNumber}
            // onBlur={formik.handleBlur}
            // error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            // helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Box>
      <Box className="contactUsRight">
        <img src={Header1} style={{ width: '80%' }} />
      </Box>
    </ContactUsStyle>
  );
};

export default ContactUs;
