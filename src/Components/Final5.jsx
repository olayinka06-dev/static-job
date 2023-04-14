import React, { useState} from 'react';
import jobdata from '../alldata';
import './Practice.css';
import header from '../image/bg-header-desktop.svg';

const JobBoard = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleRoleClick = (role) => {
    if (selectedRoles.includes(role)) return;
    setSelectedRoles([...selectedRoles, role]);
  };

  const handleLevelClick = (level) => {
    if (selectedLevels.includes(level)) return;
    setSelectedLevels([...selectedLevels, level]);
  };

  const handleLanguageClick = (language) => {
    if (selectedLanguages.includes(language)) return;
    setSelectedLanguages([...selectedLanguages, language]);
  };

  const handleRemoveClick = (item, type) => {
    switch (type) {
      case 'role':
        setSelectedRoles(selectedRoles.filter((role) => role !== item));
        break;
      case 'level':
        setSelectedLevels(selectedLevels.filter((level) => level !== item));
        break;
      case 'language':
        setSelectedLanguages(
          selectedLanguages.filter((language) => language !== item)
        );
        break;
      default:
        break;
    }
  };

  const handleClearAll = () => {
    setSelectedRoles([]);
    setSelectedLevels([]);
    setSelectedLanguages([]);
  };

  return (
    <>
      <div className='filters'>
        {selectedRoles.length > 0 && (
          <div className='filter-list'>
            <h4>Roles:</h4>
            <ul>
              {selectedRoles.map((role) => (
                <li key={role}>
                  {role}{' '}
                  <button onClick={() => handleRemoveClick(role, 'role')}>
                    <i className='fas fa-times'></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedLevels.length > 0 && (
          <div className='filter-list'>
            <h4>Levels:</h4>
            <ul>
              {selectedLevels.map((level) => (
                <li key={level}>
                  {level}{' '}
                  <button onClick={() => handleRemoveClick(level, 'level')}>
                    <i className='fas fa-times'></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedLanguages.length > 0 && (
          <div className='filter-list'>
            <h4>Languages:</h4>
            <ul>
              {selectedLanguages.map((language) => (
                <li key={language}>
                  {language}{' '}
                  <button
                    onClick={() => handleRemoveClick(language, 'language')}
                  >
                    <i className='fas fa-times'></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {(selectedRoles.length > 0 ||
          selectedLevels.length > 0 ||
          selectedLanguages.length > 0) && (
          <div className='clear-all'>
            <button onClick={handleClearAll}>Clear all</button>
          </div>
        )}
      </div>
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
        {jobdata.map((job) => (
          <div className='job' key={job.id}>
            <div className='job-info'>
              <img src={job.logo} alt={job.company} />
              <div className='job-description'>
                <h3>{job.company}</h3>
                <h2>{job.position}</h2>
                <ul>
                  <li>{job.postedAt}</li>
                  <li>{
