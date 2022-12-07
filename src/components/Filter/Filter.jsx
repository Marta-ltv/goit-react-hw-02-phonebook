import React from "react";
import propTypes from 'prop-types';
import { ErrorMessage } from "./Filter.styled";


export const Filter = ({ message }) =>
    <ErrorMessage>{message}</ErrorMessage>;

    
Filter.propTypes = {
    message: propTypes.string.isRequired,
};