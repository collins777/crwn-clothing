// Reducer - a function that recieves two properties
// State which represents the last known state of the application
// Action, an object that has a string value and payload

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  // return the state we want based on the action
  // if the action.type is set_current_user we return the new object - our initial state + the new currentUser
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
