import React from "react";
import { useStaticJobContext } from "../provider/Context";

export const JobCard = () => {
  const { allData } = useStaticJobContext();
  return (
    <div className="flex flex-col gap-3">
      {allData.jobdata.map((job) => (
        <div
          className="flex items-start bg-white p-3 justify-start flex-col md:flex-row md:justify-between md:items-center"
          key={job.id}
        >
          <div className="flex flex-row gap-2 items-center">
            <div className="">
              <img className="" src={job.logo} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <h4>{job.company}</h4>
                {job.new ? <h4>New!</h4> : null}
                {job.featured ? <h4>Feature</h4> : null}
              </div>
              <span>{job.position}</span>
              <div className="flex flex-row gap-2">
                <h4>{job.postedAt}</h4>
                <h4>{job.contract}</h4>
                <h4>{job.location}</h4>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 items-center">
            <h4 onClick={allData.handleRoleClick(job.role)}>{job.role}</h4>
            <h4>{job.level}</h4>
            {job.languages.map((language) => (
              <h4 key={language}>{language}</h4>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
