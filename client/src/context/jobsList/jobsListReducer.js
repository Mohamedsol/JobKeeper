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
        case GET_JOBS:
            return {
                ...state,
                jobsList: action.payload,
                loading: false
            }
        case ADD_JOB:
            return {
                ...state,
                jobsList: [action.payload, ...state.jobsList],
                loading: false
            }
        case DELETE_JOB:
            return {
                ...state,
                jobsList: state.jobsList.filter( job => job._id !== action.payload),
                loading: false
            }
        case CLEAR_JOBS:
            return {
                ...state,
                jobsList: null,
                filtered: null,
                error: null,
                current: null
            }    
        case UPDATE_JOB:
            return {
                ...state,
                jobsList: state.jobsList.map(job => job._id === action.payload._id ? action.payload : job),
                loading: false
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
        case FILTER_JOBS:
            return {
                ...state,
                filtered: state.jobsList.filter(job => {
                const regex = new RegExp(`${action.payload}`, 'gi');
                return job.jobTitle.match(regex) || job.companyName.match(regex) || job.status.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };    
        case JOB_ERROR:
            return {
                ...state,
                error: action.payload
            }       
        default:
            return state;
    }
}