import React from 'react';
import { Box, Typography, TextField, Icon, Button } from '@mui/material';
import ContactUsStyle from './ContactUsStyle.js';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import MuiPhoneNumber from 'material-ui-phone-number';
import { COLORS } from '../../styles/COLORS.ts';

const validationSchema = Yup.object({
  yourName: Yup.string().required('Please put in your name'),
  email: Yup.string().email('Enter valid email').required('Required'),
  // phoneNumber: Yup.string().optional(),
});

const ContactUs = () => {
  const { LightFont, FadedWhite, LightBlue, LightGrey, MainBlue } = COLORS;

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

  const textFieldStyles = {
    width: '100%',

    '& label.Mui-focused': {
      color: LightFont,
    },
    '&  label': {
      color: LightFont,
    },
    '& input': {
      // border: '2px solid green',
      color: FadedWhite,
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '0.5px solid',
        borderColor: LightGrey,
      },
      '&:hover fieldset': {
        borderColor: LightBlue,
      },
      '& ::placeholder': {
        color: LightFont,
      },
    },
  };

  return (
    <ContactUsStyle>
      <Box className="contactUsLeft" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%', maxWidth: '50rem' }}>
          <Icon sx={{ height: 'fit-content', fontSize: '4rem' }}>connect_without_contact</Icon>
          <Typography variant="h3" sx={{ fontFamily: 'inherit' }}>
            Let's level up your <br /> brand, together
          </Typography>
        </Box>
        <form
          onSubmit={formik.handleSubmit}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '50rem' }}
        >
          <TextField
            fullWidth
            id="yourName"
            name="yourName"
            label="Name"
            sx={textFieldStyles}
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
            sx={textFieldStyles}
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
            sx={textFieldStyles}
            onChange={formik.handlePhoneNumber}
          />

          <TextField
            id="standard-multiline-static"
            sx={textFieldStyles}
            label="How can we help?"
            multiline
            rows={5}
            placeholder="Tell us a little about the project"
          />

          <Button type="submit" variant="contained" sx={{ bgcolor: MainBlue, py: 2 }}>
            Get Started
          </Button>
        </form>
      </Box>
      <Box className="contactUsRight" />
    </ContactUsStyle>
  );
};

export default ContactUs;
