import {
    GET_JOBS,
    ADD_JOB,
    DELETE_JOB,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_JOB,
    FILTER_JOBS,
    CLEAR_JOBS,
    CLEAR_FILTER,
    JOB_ERROR
  } from '../types';

  export default (state, action) => {
      switch(action.type) {
        case ADD_JOB:
            return {
                ...state,
                jobsList: [...state.jobsList, action.payload]
            }
        case DELETE_JOB:
            return {
                ...state,
                jobsList: state.jobsList.filter( job => job.id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };   
          default:
              return state;
      }
  }