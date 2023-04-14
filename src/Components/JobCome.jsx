import React, { useState, useEffect } from 'react';
import jobdata from '../alldata';
import './Practice.css';
import header from '../image/bg-header-desktop.svg';

const MyAdvance = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    setJobs(jobdata);
  }, []);

  const handleRoleClick = (role) => {
    setSelectedRoles((prev) => [...prev, role]);
  };

  const handleLevelClick = (level) => {
    setSelectedLevels((prev) => [...prev, level]);
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguages((prev) => [...prev, language]);
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
      <div className="content">
        <div className="overall">
          {jobs.map((job) => (
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
          ))}
        </div>
        <div className="todo">
          {selectedRoles.length > 0 && (
            <div className="list">
              <h3>Selected Roles:</h3>
              <ul>
                {selectedRoles.map((role,
