import React, { useContext, useRef, useEffect } from 'react';
import JobsListContext from '../../context/jobsList/jobsListContext';

const JobsListFilter = () => {
  const jobsListContext = useContext(JobsListContext);
  const text = useRef('');

  const { filterJobs, clearFilter, filtered } = jobsListContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
        filterJobs(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Jobs...'
        onChange={onChange}
      />
    </form>
  );
};

export default JobsListFilter;