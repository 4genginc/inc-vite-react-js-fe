import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
  } from '../actions/userDetailActions.jsx';
  
  const initialState = {
    loading: false,
    user: {},
    error: null
  };
  
  const userDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null
        };
      case FETCH_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null
        };
      case UPDATE_USER_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userDetailReducer;
  