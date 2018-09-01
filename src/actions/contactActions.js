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

// export const getContacts = () => {
//   return {
//     type: GET_CONTACTS
//   };
// };

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};

export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};

export const editContact = contact => {
  return {
    type: EDIT_CONTACT,
    payload: contact
  };
};
