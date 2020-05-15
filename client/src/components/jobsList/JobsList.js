import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner'

import JobsListItem from './JobsListItem';
import JobsListContext from '../../context/jobsList/jobsListContext';

const JobsList = () => {
  const jobsListContext = useContext(JobsListContext);

  const { jobsList, filtered, getJobs, loading  } = jobsListContext;

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [])

  if (jobsList !== null && jobsList.length === 0 && !loading) {
    return <h4>Please add a Job</h4>;
  }
  

  return (
    <Fragment>
      {jobsList !== null && !loading ? ( <TransitionGroup>
            { filtered !== null ? filtered.map(job => (
            <CSSTransition key={job._id} timeout={500} classNames='item'>
                <JobsListItem job={job}/>
            </CSSTransition>
                )) 
            : jobsList.map(job => (
            <CSSTransition key={job._id} timeout={500} classNames='item'>
                <JobsListItem job={job} />
            </CSSTransition>
      ))}
        </TransitionGroup>) 
        : <Spinner />}
       
    </Fragment>
  );
}

export default JobsList;