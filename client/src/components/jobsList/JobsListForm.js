import React, { useState, useContext, useEffect} from 'react';
import JobsListContext from '../../context/jobsList/jobsListContext';


const JobsListForm = () => {

    const jobsListContext = useContext(JobsListContext);

    const { addJob, current } = jobsListContext;

    useEffect(() => {
        console.log('current',current)
      if (current !== null) {
        setJob(current);
        console.log('job', job)
      } else {
          setJob({
              jobTitle: '',
              companyName: '',
              city: '',
              status: 'applied'
          })
      }
    }, [jobsListContext, current]); 


    const [job, setJob] = useState({

        jobTitle: '',
        companyName: '',
        city: '',
        status: 'applied'
    });

  const { jobTitle, companyName, city, status } = job;

  const onChange = e =>
  setJob({ ...job, [e.target.name]: e.target.value });
  console.log(job)

  const onSubmit = e => {
    e.preventDefault();
        addJob(job);
    setJob({
        jobTitle: '',
        comapnyName: '',
        city: '',
        status: 'applied'
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        Add Job
      </h2>
      <input
        type='text'
        placeholder='Job Title'
        name='jobTitle'
        value={jobTitle}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Company Name'
        name='companyName'
        value={companyName}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='City'
        name='city'
        value={city}
        onChange={onChange}
      />
      <h5>Application status</h5>
      <input
        type='radio'
        name='status'
        value='applied'
        checked={status === 'applied'}
        onChange={onChange}
      />{' '}
      Applied{' '}
      <input
        type='radio'
        name='status'
        value='phone interview'
        checked={status == 'phone interview'}
        onChange={onChange}
      />{' '}
      Phone Interview{' '}
      <input
        type='radio'
        name='status'
        value='onsite interview'
        checked={status === 'onsite interview'}
        onChange={onChange}
      />{' '}
      Onsite Interview{' '}
      <div>
        <input
          type='submit'
          value='Add Job'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
}

export default JobsListForm;