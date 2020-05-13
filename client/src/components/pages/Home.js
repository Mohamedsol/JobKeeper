import React, { useEffect, useContext } from 'react';
import JobsList from '../jobsList/JobsList'
import JobsListForm from '../jobsList/JobsListForm'
import JobsListFilter from '../jobsList/JobsListFilter'
import AuthContext from '../../context/auth/authContext'



const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
    },[]);

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