import React from 'react';
import { useState, useEffect } from 'react';
import jobdata from '../alldata';
import './Practice.css';
import header from '../image/bg-header-desktop.svg';




const MyAdvance = () => {
    const [jobs, setJobs] = useState([]);
    

    useEffect(() => {
    setJobs(jobdata);
    }, []);



  return (
    <div className="biggest">
        <div><img className="iger" src={header} alt="" /></div>
        <div className="content">          
            <div className="overall">
                {jobs.map((job) => (

        
                <div className='container' key={job.id}>
                    <div className="first">
                        <div className="image"><img className='picture' src={job.logo} alt="" /></div>
                        <div className="enclosure">
                            <div className="top">
                                <h4>{job.company}</h4>
                                {
                                        job.new ? <h4>New!</h4> : null
                                    }
                                {
                                    job.featured ? <h4>Feature</h4> : null
                                }
                            </div>
                            <h3>{job.position}</h3>
                            <div className="bottom">
                                <h4>{job.postedAt}</h4>
                                <h4>{job.contract}</h4>
                                <h4>{job.location}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="second">
                        <h4>{job.role}</h4>
                        <h4>{job.level}</h4>
                        <h4>{job.languages[0]}</h4>
                        <h4>{job.languages[1]}</h4>
                        <h4>{job.languages[2]}</h4>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default MyAdvance;




{/* <div className="App">
<form>
  <div>
    <label htmlFor="role">Role:</label>
    <select value={filter.role} onChange={(e) => setFilter({ ...filter, role: e.target.value })}>
      <option value="">All</option>
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="Fullstack">Fullstack</option>
    </select>
  </div>
  <div>
    <label htmlFor="level">Level:</label>
    <select value={filter.level} onChange={(e) => setFilter({ ...filter, level: e.target.value })}>
      <option value="">All</option>
      <option value="Junior">Junior</option>
      <option value="Midweight">Midweight</option>
      <option value="Senior">Senior</option>
    </select>
  </div>
  <div>
    <label htmlFor="languages">Languages:</label>
    <select id="languages" multiple value={filter.languages} onChange={handleLanguageChange}>
      <option value="">All</option>
      <option value="HTML">HTML</option>
      <option value="CSS">CSS</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Python">Python</option>
      <option value="Ruby">Ruby</option>
    </select>
  </div>
</form>
</div> 


    const [filter, setFilter] = useState({ role: '', level: '', languages: [] });

    const filterJobs = (job) => {
        const { role, level, languages } = filter;
        return (
            (role === '' || job.role === role) &&
            (level === '' || job.level === level) &&
            (languages.length === 0 || languages.every((lang) => job.languages.includes(lang)))
        );
    };

    useEffect(() => {
    const filteredJobs = jobdata.filter(filterJobs);
    setJobs(filteredJobs);
    }, [filter]);

    const handleLanguageChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);
        setFilter({ ...filter, languages: selectedOptions });
      };



*/}