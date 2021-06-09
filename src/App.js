import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { getJobListStreamCallObj } from './api/grpc/JobCorridorClient';

import BasicTable from './BasicTable';

const App = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
      let jobData = [];
      const call = getJobListStreamCallObj();
      call.on('data',(resp)=>{
        console.log(resp.toObject().jobsList);
        jobData = jobData.concat(resp.toObject().jobsList);
        setJobs(jobData);
      });
      call.on('end',()=>{
        console.log('--end--');
        const jobDataSorted = _.orderBy(jobData, ['totalfteatriskpercent'], ['desc']);
        setJobs(jobDataSorted);
      });
  }, []);
  return (
    <div className="App">
      <BasicTable jobs={jobs}/>
    </div>
  );
}

export default App;
