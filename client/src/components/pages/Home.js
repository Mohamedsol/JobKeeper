import React from 'react';
import JobsList from '../jobsList/JobsList'
import JobsListForm from '../jobsList/JobsListForm'



const Home = () => {
    return ( 
    <div className='grid-2'>
        <div>
            <JobsListForm />
        </div>
        <div>
            <JobsList />
        </div>
    </div>   
     );
}
 
export default Home;