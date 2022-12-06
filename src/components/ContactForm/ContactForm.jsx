import React from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import { Input } from './ContactForm.styled';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Input = styled(Field)`
padding: 7px;
display: flex;
gap: 10px;
align-items: center;
width: 200px;
margin: 3px 10px;
`;

const FormContainer = styled(Formik)`
margin-left: 10px;
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
    <FormContainer initialValues={initialValue} validationSchema={schema} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage component="div" name="name" />
        </label>

        <label>
          Number
          <Input
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage component="div" name="number" />
        </label>
        <button>Add contact</button>
      </Form>
    </FormContainer>
  );
};

// FeedbackOptions.propTypes = {
//     options: PropTypes.number.isRequired,
//     onLeaveFeedback: PropTypes.number.isRequired,
// };
