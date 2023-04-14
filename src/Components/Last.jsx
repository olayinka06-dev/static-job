import React, { useState, useEffect } from 'react';
import jobdata from '../alldata';
import './Practice.css';
import header from '../image/bg-header-desktop.svg';

const Last = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setJobs(jobdata);
  }, []);

  const handleRoleClick = (role) => {
    setSelectedRoles((prev) => [...prev, role]);
    setShow(true);
  };

  const handleLevelClick = (level) => {
    setSelectedLevels((prev) => [...prev, level]);
    setShow(true);
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguages((prev) => [...prev, language]);
    setShow(true);
  };

  const handleRemoveClick = (index, type) => {
    switch (type) {
      case 'roles':
        setSelectedRoles((prev) => prev.filter((_, i) => i !== index));
        break;
      case 'levels':
        setSelectedLevels((prev) => prev.filter((_, i) => i !== index));
        break;
      case 'languages':
        setSelectedLanguages((prev) => prev.filter((_, i) => i !== index));
        break;
      default:
        break;
    }
  };

  const handleClearClick = () => {
    setSelectedRoles([]);
    setSelectedLevels([]);
    setSelectedLanguages([]);
  };

  return (
    <div className="biggest">
        <div>
            <img className="iger" src={header} alt="" />
        </div>
        <div className={`${show ? "todo todo-sub" : "todo"}`}>
            {selectedRoles.length > 0 && (
                <div style={{display: "flex", flexDirection: "row", width: "100%"}}  className="list">
                    <div style={{display: "flex", flexDirection: "row", width: "100%"}}  className="join">
                    {selectedRoles.map((role, index) => (
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}  className="bind" key={index}>
                          {role}{' '}
                          <button onClick={() => handleRemoveClick(index, 'roles')}>
                              X
                          </button>
                        </div>
                    ))}
                    </div>
                </div>
            )}
            {selectedLevels.length > 0 && (
                <div style={{display: "flex", flexDirection: "row", width: "100%"}}  className="list">
                    <div style={{display: "flex", flexDirection: "row", width: "100%"}}  className="join">
                    {selectedLevels.map((level, index) => (
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}  className="bind" key={index}>
                          {level}{' '}
                          <button onClick={() => handleRemoveClick(index, 'levels')}>
                              X
                          </button>
                        </div>
                    ))}
                    </div>
                </div>
            )}
            {selectedLanguages.length > 0 && (
                <div style={{display: "flex", flexDirection: "row", width: "100%"}} className="list">
                    <div style={{display: "flex", flexDirection: "row", width: "100%"}}  className="join">
                    {selectedLanguages.map((language, index) => (
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}  className="bind" key={index}>
                          {language}{' '}
                          <button onClick={() => handleRemoveClick(index, 'languages')}>
                              X
                          </button>
                        </div>
                    ))}
                    </div>
                </div>
            )}
            {
              show ? <button onClick={handleClearClick}>Clear</button> : null
            }
        </div>
        <div className="content">
          <div className="overall">
            {jobs
              .filter((job) => {
                // Check if all selected roles exist in job roles
                const selectedRolesExist = selectedRoles.every((role) =>
                  job.role.toLowerCase().includes(role.toLowerCase())
                );
                // Check if all selected levels exist in job levels
                const selectedLevelsExist = selectedLevels.every((level) =>
                  job.level.toLowerCase().includes(level.toLowerCase())
                );
                // Check if all selected languages exist in job languages
                const selectedLanguagesExist = selectedLanguages.every((language) =>
                  job.languages.map((lang) => lang.toLowerCase()).includes(language.toLowerCase())
                );
                // Return the job if all selected filters exist in it
                return selectedRolesExist && selectedLevelsExist && selectedLanguagesExist;
              })
              .map((job) => (
                  <div className="container" key={job.id}>
                    <div className="first">
                      <div className="image">
                          <img className="picture" src={job.logo} alt="" />
                      </div>
                      <div className="enclosure">
                        <div className="top">
                            <h4>{job.company}</h4>
                            {job.new ? <h4>New!</h4> : null}
                            {job.featured ? <h4>Feature</h4> : null}
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
                      <h4 onClick={() => handleRoleClick(job.role)}>
                        {job.role}
                      </h4>
                      <h4 onClick={() => handleLevelClick(job.level)}>
                        {job.level}
                      </h4>
                      {job.languages.map((language) => (
                        <h4
                        key={language}
                        onClick={() => handleLanguageClick(language)}
                        >
                        {language}
                        </h4>
                      ))}
                    </div>
                  </div>
              ))
            }
          </div>
        </div>
  </div>
  )
}
export default Last;




    

  

