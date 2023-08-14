import React from "react";
import { useStaticJobContext } from "../provider/Context";

export const JobCard = () => {
  const { allData } = useStaticJobContext();
  return (
    <div className="flex flex-col gap-3">
      {allData.filteredJobs.map((job) => (
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
            <button onClick={()=> allData.handleRoleClick(job.role)}>{job.role}</button>
            <button onClick={()=> allData.handleLevelClick(job.level)}>{job.level}</button>
            {job.languages.map((language) => (
              <button onClick={()=> allData.handleLanguageClick(language)} key={language}>{language}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
