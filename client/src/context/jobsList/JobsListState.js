import React, { useReducer } from 'react';
import axios from 'axios';
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
    jobsList: null,
    current: null,
    filtered: null,
    error: null

  };

  const [state, dispatch] = useReducer(jobsListReducer, initialState);

  // Get jobs
  const getJobs = async () => {

    try {
      const res = await axios.get('/api/jobsList');

      dispatch({
        type: GET_JOBS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add job
  
    const addJob = async job => {

        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
    
        try {
          const res = await axios.post('/api/jobsList', job, config);
    
          dispatch({
            type: ADD_JOB,
            payload: res.data
          });
        } catch (err) {
          dispatch({
            type: JOB_ERROR,
            payload: err.response.msg
          });
        }
      };

  // Delete job
    const deleteJob = async id => {

      try {
        await axios.delete(`/api/jobsList/${id}`);
  
        dispatch({
          type: DELETE_JOB,
          payload: id
        });
      } catch (err) {
        dispatch({
          type: JOB_ERROR,
          payload: err.response.msg
        });
      }
    }
   
  // Update job
  
  const updateJob = async job => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(`/api/jobsList/${job._id}`, job, config);

      dispatch({
        type: UPDATE_JOB,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear jobs
  const clearJobs = () => {
    dispatch({ type: CLEAR_JOBS });
  };

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
        error: state.error,
        addJob,
        deleteJob,
        setCurrent,
        clearCurrent,
        updateJob,
        filterJobs,
        clearFilter,
        getJobs,
        clearJobs
      }}
    >
      {props.children}
    </JobsListContext.Provider>
  );
};

export default JobsListState;