import React from "react";
import { useState, useEffect } from "react";
import jobdata from "./alldata";
import "./Practice.css";

const Final3 = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    setJobs(jobdata);
  }, []);

  const handleRoleClick = (role) => {
    if (!selectedRoles.includes(role)) {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  const handleLevelClick = (level) => {
    if (!selectedLevels.includes(level)) {
      setSelectedLevels([...selectedLevels, level]);
    }
  };

  const handleLanguageClick = (language) => {
    if (!selectedLanguages.includes(language)) {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleRemoveSelectedRole = (role) => {
    const updatedSelectedRoles = selectedRoles.filter(
      (selectedRole) => selectedRole !== role
    );
    setSelectedRoles(updatedSelectedRoles);
  };

  const handleRemoveSelectedLevel = (level) => {
    const updatedSelectedLevels = selectedLevels.filter(
      (selectedLevel) => selectedLevel !== level
    );
    setSelectedLevels(updatedSelectedLevels);
  };

  const handleRemoveSelectedLanguage = (language) => {
    const updatedSelectedLanguages = selectedLanguages.filter(
      (selectedLanguage) => selectedLanguage !== language
    );
    setSelectedLanguages(updatedSelectedLanguages);
  };

  const handleClearSelected = () => {
    setSelectedRoles([]);
    setSelectedLevels([]);
    setSelectedLanguages([]);
  };

  const filteredJobs = jobs.filter((job) => {
    const roleMatch =
      selectedRoles.length === 0 || selectedRoles.includes(job.role);
    const levelMatch =
      selectedLevels.length === 0 || selectedLevels.includes(job.level);
    const languageMatch =
      selectedLanguages.length === 0 ||
      job.languages.some((language) => selectedLanguages.includes(language));
    return roleMatch && levelMatch && languageMatch;
  });

  return (
    <div className="biggest">
      <div>
        <img className="iger" src={"/images/bg-header-desktop.svg"} alt="" />
      </div>
      <div className="content">
        <div className="overall">
          <div className="aliner">
            <div
              className={`todo ${
                selectedRoles.length > 0 ||
                selectedLevels.length > 0 ||
                selectedLanguages.length > 0
                  ? "todo-sub"
                  : "todo"
              }`}
            >
              {selectedRoles.map((role) => (
                <div key={role} className="bind">
                  <span>{role}</span>
                  <button onClick={() => handleRemoveSelectedRole(role)}>
                    x
                  </button>
                </div>
              ))}
              {selectedLevels.map((level) => (
                <div key={level} className="bind">
                  <span>{level}</span>
                  <button onClick={() => handleRemoveSelectedLevel(level)}>
                    x
                  </button>
                </div>
              ))}
              {selectedLanguages.map((language) => (
                <div key={language} className="bind">
                  <span>{language}</span>
                  <button
                    onClick={() => handleRemoveSelectedLanguage(language)}
                  >
                    x
                  </button>
                </div>
              ))}
              {selectedRoles.length > 0 ||
              selectedLevels.length > 0 ||
              selectedLanguages.length > 0 ? (
                <button className="clear-button" onClick={handleClearSelected}>
                  Clear
                </button>
              ) : null}
            </div>
          </div>

          {filteredJobs.map((job) => (
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
                  <span>{job.position}</span>
                  <div className="bottom">
                    <h4>{job.postedAt}</h4>
                    <h4>{job.contract}</h4>
                    <h4>{job.location}</h4>
                  </div>
                </div>
              </div>
              <div className="second">
                <h4 onClick={() => handleRoleClick(job.role)}>{job.role}</h4>
                <h4 onClick={() => handleLevelClick(job.level)}>{job.level}</h4>
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
          ))}
        </div>
      </div>
    </div>
  );
};
export default Final3;
