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

  const handleRemoveRole = (role) => {
    const updatedRoles = selectedRoles.filter((r) => r !== role);
    setSelectedRoles(updatedRoles);
  };

  const handleRemoveLevel = (level) => {
    const updatedLevels = selectedLevels.filter((l) => l !== level);
    setSelectedLevels(updatedLevels);
  };

  const handleRemoveLanguage = (language) => {
    const updatedLanguages = selectedLanguages.filter((l) => l !== language);
    setSelectedLanguages(updatedLanguages);
  };

  const handleClearAll = () => {
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
                <h4 onClick={() => handleRoleClick(job.role)}>{job.role}</h4>
                <h4 onClick={() => handleLevelClick(job.level)}>{job.level}</h4>
                {job.languages.map((language, index) => (
                  <h4 key={index} onClick={() => handleLanguageClick(language)}>
                    {language}
                  </h4>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="popout">
          {selectedRoles.length > 0 && (
            <div className="popout-section">
              <h3>Selected Roles</h3>
              <ul>
                {selectedRoles.map((role, index) => (
                  <li key={index}>
                    {role}
                    <
