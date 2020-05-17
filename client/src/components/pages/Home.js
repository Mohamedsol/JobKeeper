import React, { useEffect, useContext } from 'react';
import Chart from '../layout/Chart'
import JobsList from '../jobsList/JobsList'
import JobsListForm from '../jobsList/JobsListForm'
import JobsListFilter from '../jobsList/JobsListFilter'
import AuthContext from '../../context/auth/authContext'



const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    },[]);

    return ( 
    <div className='grid-2'>
        <div>
            <JobsListForm />
            <Chart />
        </div>
        <div>
            <JobsListFilter />
            <JobsList />
        </div>
    </div>   
     );
}
 
export default Home;