import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT
} from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    dispatch({
      type: GET_CONTACTS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};

export const addContact = contact => async dispatch => {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      contact
    );
    dispatch({
      type: ADD_CONTACT,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const editContact = contact => {
  return {
    type: EDIT_CONTACT,
    payload: contact
  };
};

// export const getContacts = () => {
//   return {
//     type: GET_CONTACTS
//   };
// };

// export const deleteContact = id => {
//   return {
//     type: DELETE_CONTACT,
//     payload: id
//   };
// };

// export const addContact = contact => {
//   return {
//     type: ADD_CONTACT,
//     payload: contact
//   };
// };

// export const editContact = contact => {
//   return {
//     type: EDIT_CONTACT,
//     payload: contact
//   };
// };
