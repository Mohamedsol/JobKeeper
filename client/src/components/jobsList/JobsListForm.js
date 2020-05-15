import React, { useState, useContext, useEffect} from 'react';
import JobsListContext from '../../context/jobsList/jobsListContext';


const JobsListForm = () => {

    const jobsListContext = useContext(JobsListContext);

    const { addJob, updateJob , clearCurrent , current } = jobsListContext;

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
    // eslint-disable-next-line
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

    if(current === null){
        addJob(job);
    } else {
        updateJob(job)
    }   
    clearAll();
  }

  const clearAll = () => {
    clearCurrent();
  }

  return (
    <form onSubmit={onSubmit}>
        <h2 className='text-primary'>
            {!current ?'Add Job' : 'Edit Job' }
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
            checked={status === 'phone interview'}
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
            value={!current ?'Add Job' : 'Update Job' }
            className='btn btn-primary btn-block'
            />
        </div>
        {current && 
            <div>
                <button className='btn btn-light btn-block'
                onClick={clearAll}>Clear</button>
            </div>
        }
    </form>
  );
}

export default JobsListForm;