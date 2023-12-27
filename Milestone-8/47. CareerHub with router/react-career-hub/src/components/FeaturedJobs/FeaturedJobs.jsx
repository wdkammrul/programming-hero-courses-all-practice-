import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    // step-1 
    const [jobs, setJobs] = useState([]);

    // step-7 
    // this is not the best way to load show all data 
    const [dataLength, setDataLength] = useState(4)

    // step-2 
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* step-3  */}
                {
                    // step-8 slice
                   jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

             {/* step-10 condition */}
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button 
                // step-9 onClick use 
                onClick={() => setDataLength(jobs.length)}
                className="btn btn-primary">Show All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;