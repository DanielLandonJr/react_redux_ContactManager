import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from '../actions/types';

const initialState = {
  // all contacts
  contacts: [],
  // current contact being viewed
  contact: {}
  // contacts: [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     email: 'john@gmail.com',
  //     phone: '555-555-5555'
  //   },
  //   {
  //     id: 2,
  //     name: 'Karen Williams',
  //     email: 'karen@gmail.com',
  //     phone: '444-444-4444'
  //   },
  //   {
  //     id: 3,
  //     name: 'Henry Johnson',
  //     email: 'henry@gmail.com',
  //     phone: '333-333-333'
  //   }
  // ]
};

// will evaluate what to do with the state using the action
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case DELETE_CONTACT:
      // filter the state.contacts so that it removes the contact with supplied id from payload
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      // add new contact to state.contacts array
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export default contactReducer;
