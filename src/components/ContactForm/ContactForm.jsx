import React from "react";
// import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

const initialValue = {
  name: '',
};
export const ContactForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
     console.log(actions);
  }
  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
    <Form autoComplete="off">
    <label>Name
      <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
    </label>
    <button>Add contact</button>
      </Form>
      </Formik>
  )
}



// FeedbackOptions.propTypes = {
//     options: PropTypes.number.isRequired,
//     onLeaveFeedback: PropTypes.number.isRequired,
// };