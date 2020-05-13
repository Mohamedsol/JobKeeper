import React, { useReducer } from 'react';
import axios from 'axios'
import {v4 as uuid} from 'uuid';
import JobsListContext from './jobsListContext';
import jobsListReducer from './jobsListReducer';
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

const JobsListState = props => {
  const initialState = {
    jobsList: [],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(jobsListReducer, initialState);

  // Get jobs
  

  // Add job
  
    const addJob = job => {
      
      dispatch({ type: ADD_JOB, payload: job})
    }

  // Delete job
    const deleteJob = id => {
      dispatch({ type: DELETE_JOB, payload: id })
    }
   
  // Update job
  
  const updateJob = job => {
    dispatch({type: UPDATE_JOB, payload: job})
  }
    

  // Clear jobs
  

  // Set Current job
  const setCurrent = job => {
    dispatch({ type: SET_CURRENT, payload: job });
  };

  // Clear Current job
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  

  // Filter jobs
  const filterJobs = text => {
    dispatch({ type: FILTER_JOBS, payload: text})
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };



  return (
    <JobsListContext.Provider
      value={{
        jobsList: state.jobsList,
        current: state.current,
        filtered: state.filtered,
        addJob,
        deleteJob,
        setCurrent,
        clearCurrent,
        updateJob,
        filterJobs,
        clearFilter
      }}
    >
      {props.children}
    </JobsListContext.Provider>
  );
};

export default JobsListState;