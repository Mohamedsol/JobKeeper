import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import JobsListContext from '../../context/jobsList/jobsListContext';

const JobsListItem = ({ job }) => {

  const { id, jobTitle, companyName, city, status } = job;
  const jobsListContext = useContext(JobsListContext);
  const { deleteJob, setCurrent, clearCurrent } = jobsListContext;

  const onDeleteJob = () => {
    deleteJob(id);
    clearCurrent();
  }


  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {jobTitle}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (status === 'onsite interview' ? 'badge-success' : 'badge-primary')
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {companyName && (
          <li>
            <b>Company:</b> {companyName}
          </li>
        )}
        {city && (
          <li>
            <b>City:</b> {city}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={()=> setCurrent(job)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDeleteJob}>
          Delete
        </button>
      </p>
    </div>
  );
};

JobsListItem.propTypes = {
  job: PropTypes.object.isRequired
};

export default JobsListItem;