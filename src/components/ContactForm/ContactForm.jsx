import React from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import { Input } from './ContactForm.styled';
import styled from 'styled-components';
import { Label, Button } from './ContactForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Input = styled(Field)`
display: flex;
padding: 10px;
align-items: center;
margin-left: 10px;
border-radius: 8px;
`;

const FormContainer = styled(Form)`
margin:7px;
border: 1px solid black;
border-radius: 8px;
width:500px;
background-color: #f1ecea;

`;



const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValue = {
  name: '',
  number: '',
};
export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleSubmit}>
      <FormContainer autoComplete="off">
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage component="div" name="name" />
        </Label>

        <Label>
          Number
          <Input
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage component="div" name="number" />
        </Label>
        <Button>Add contact</Button>
      </FormContainer>
    </Formik>
  );
};

// FeedbackOptions.propTypes = {
//     options: PropTypes.number.isRequired,
//     onLeaveFeedback: PropTypes.number.isRequired,
// };
