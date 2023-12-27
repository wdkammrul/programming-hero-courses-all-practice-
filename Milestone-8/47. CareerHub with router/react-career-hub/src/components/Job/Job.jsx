import { MdLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

// step-4 receive job
const Job = ({ job }) => {

    // step-5 
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-slate-600 shadow-xl">

            {/* step-6 all dynamic */}
            <figure><img src={logo} alt="logo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="mt-4">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{job_type}</button>
                </div>

                <div className="mt-4 flex gap-4">
                    <h2 className="flex"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
                    <h2 className="flex"><HiOutlineCurrencyDollar className="text-2xl mr-2"></HiOutlineCurrencyDollar>{salary}</h2>
                </div>

                <div className="card-actions mt-4">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;