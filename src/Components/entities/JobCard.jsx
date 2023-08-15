import React, { useEffect } from "react";
import { useStaticJobContext } from "../provider/Context";
import Aos from "aos";
import "aos/dist/aos.css";

export const JobCard = () => {
  const { allData } = useStaticJobContext();

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in",
      delay: 100
    })
  }, []);

  return (
    <div className="flex flex-col gap-16 md:gap-6">
      {allData.filteredJobs.map((job) => (
        <div
          className="flex items-start bg-white py-7 rounded-xl shadow px-4 md:px-8 justify-start flex-col md:flex-row md:justify-between md:items-center"
          key={job.id}
          data-aos="fade-up"
        >
          <div className="flex relative flex-row gap-4 items-center">
            <div className="">
              <img className="md:h-auto h-[65px] md:relative md:top-0 absolute top-[-65px]" src={job.logo} alt="" />
            </div>
            <div className="flex mt-5 md:mt-0 flex-col gap-2">
              <div className="flex flex-row gap-2">
                <h4 className="font-[700] p-1 text-main">{job.company}</h4>
                {job.new ? <h4 className="py-[4px] px-4 text-white bg-main rounded-3xl">New!</h4> : null}
                {job.featured ? <h4 className="py-[4px] px-4 text-white bg-[rgb(42,58,57)] rounded-3xl">Feature</h4> : null}
              </div>
              <span className="font-[700] transition duration-500 ease-linear cursor-pointer hover:text-main">{job.position}</span>
              <div className="flex flex-row text-[rgb(152,159,159)] gap-2">
                <h4>{job.postedAt}</h4>
                <h4>. {job.contract} .</h4>
                <h4>{job.location}</h4>
              </div>
            </div>
          </div>
          <div className="grid border-t md:mt-0 md:pt-0 pt-4 mt-4 md:border-transparent grid-cols-3 md:grid-cols-5 gap-3 justify-end items-center">
            <button className="bg-primary py-2 px-3 rounded-xl text-main font-[600] hover:bg-main transition ease-linear duration-500 hover:text-white" onClick={()=> allData.handleRoleClick(job.role)}>{job.role}</button>
            <button className="bg-primary py-2 px-3 rounded-xl text-main font-[600] hover:bg-main transition ease-linear duration-500 hover:text-white" onClick={()=> allData.handleLevelClick(job.level)}>{job.level}</button>
            {job.languages.map((language) => (
              <button className="bg-primary py-2 px-3 rounded-xl text-main font-[600] hover:bg-main transition ease-linear duration-500 hover:text-white" onClick={()=> allData.handleLanguageClick(language)} key={language}>{language}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
