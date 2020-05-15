import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import JobsListItem from './JobsListItem';
import JobsListContext from '../../context/jobsList/jobsListContext';

const JobsList = () => {
  const jobsListContext = useContext(JobsListContext);

  const { jobsList, filtered } = jobsListContext;

  

  if (jobsList !== null && jobsList.length === 0) {
    return <h4>Please add a Job</h4>;
  }
  

  return (
    <Fragment>
        <TransitionGroup>
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
        </TransitionGroup>
    </Fragment>
  );
}

export default JobsList;