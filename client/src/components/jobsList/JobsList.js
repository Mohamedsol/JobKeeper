import React, { Fragment, useContext } from 'react';
import JobsListItem from './JobsListItem';
import JobsListContext from '../../context/jobsList/jobsListContext';

const JobsList = () => {
  const jobsListContext = useContext(JobsListContext);

  const { jobsList } = jobsListContext;

  

  

  return (
    <Fragment>
      { jobsList.map(job => (
          <JobsListItem job={job} key={job.id}/>
      ))}
    </Fragment>
  );
}

export default JobsList;