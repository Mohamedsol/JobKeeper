import React from 'react';
import JobsList from '../jobsList/JobsList'
import JobsListForm from '../jobsList/JobsListForm'
import JobsListFilter from '../jobsList/JobsListFilter'



const Home = () => {
    return ( 
    <div className='grid-2'>
        <div>
            <JobsListForm />
        </div>
        <div>
            <JobsListFilter />
            <JobsList />
        </div>
    </div>   
     );
}
 
export default Home;