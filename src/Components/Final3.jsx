import React from 'react';
import { useState, useEffect } from 'react';
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

  const handleRemoveSelectedRole = (role) => {
    const updatedSelectedRoles = selectedRoles.filter((selectedRole) => selectedRole !== role);
    setSelectedRoles(updatedSelectedRoles);
  };

  const handleRemoveSelectedLevel = (level) => {
    const updatedSelectedLevels = selectedLevels.filter((selectedLevel) => selectedLevel !== level);
    setSelectedLevels(updatedSelectedLevels);
  };

  const handleRemoveSelectedLanguage = (language) => {
    const updatedSelectedLanguages = selectedLanguages.filter((selectedLanguage) => selectedLanguage !== language);
    setSelectedLanguages(updatedSelectedLanguages);
  };

  const handleClearSelected = () => {
    setSelectedRoles([]);
    setSelectedLevels([]);
    setSelectedLanguages([]);
  };

  return (
    <div className="biggest">
      <div><img className="iger" src={header} alt="" /></div>
      <div className="content">          
        <div className="overall">
          <div className="selected-container">
            {selectedRoles.map((role) => (
              <div key={role} className="selected-item">
                <span>{role}</span>
                <button onClick={() => handleRemoveSelectedRole(role)}>x</button>
              </div>
            ))}
            {selectedLevels.map((level) => (
              <div key={level} className="selected-item">
                <span>{level}</span>
                <button onClick={() => handleRemoveSelectedLevel(level)}>x</button>
              </div>
            ))}
            {selectedLanguages.map((language) => (
              <div key={language} className="selected-item">
                <span>{language}</span>
                <button onClick={() => handleRemoveSelectedLanguage(language)}>x</button>
              </div>
            ))}
            {selectedRoles.length > 0 || selectedLevels.length > 0 || selectedLanguages.length > 0 ? (
              <button className="clear-button" onClick={handleClearSelected}>Clear</button>
            ) : null}
          </div>
          {jobs.map((job) => (
            <div className='container' key={job.id}>
              <div className="first">
                <div className="image"><img className='picture' src={job.logo} alt="" /></div>
                <div className="enclosure">
                  <div className="top">
                    <h4>{job.company}</h4>
                    {job.new ? <h4>New!</h4> : null}
                    {job.featured ? <h4>Feature
