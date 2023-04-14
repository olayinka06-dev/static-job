import React, { useState, useEffect } from 'react';
import jobdata from '../alldata';
import './Practice.css';
import header from '../image/bg-header-desktop.svg';

const Final2 = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({ roles: [], levels: [], languages: [] });
  const [selectedFiltersArray, setSelectedFiltersArray] = useState([]);

  useEffect(() => {
    setJobs(jobdata);
  }, []);

  const handleFilterClick = (filterType, filterValue) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: prevState[filterType].includes(filterValue)
        ? prevState[filterType].filter((item) => item !== filterValue)
        : [...prevState[filterType], filterValue],
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({ roles: [], levels: [], languages: [] });
    setSelectedFiltersArray([]);
  };

  useEffect(() => {
    const filters = [];

    Object.entries(selectedFilters).forEach(([filterType, filterValues]) => {
      filterValues.forEach((filterValue) => {
        filters.push({ filterType, filterValue });
      });
    });

    setSelectedFiltersArray(filters);
  }, [selectedFilters]);

  const handleRemoveSelectedFilter = (filter) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filter.filterType]: prevState[filter.filterType].filter((item) => item !== filter.filterValue),
    }));

    setSelectedFiltersArray((prevState) => prevState.filter((item) => item !== filter));
  };

  const filteredJobs = jobs.filter((job) => {
    const isRoleSelected = selectedFilters.roles.length === 0 || selectedFilters.roles.includes(job.role);
    const isLevelSelected = selectedFilters.levels.length === 0 || selectedFilters.levels.includes(job.level);
    const isLanguageSelected =
      selectedFilters.languages.length === 0 ||
      selectedFilters.languages.every((language) => job.languages.includes(language));

    return isRoleSelected && isLevelSelected && isLanguageSelected;
  });

  return (
    <div className="biggest">
      <div>
        <img className="iger" src={header} alt="" />
      </div>
      <div className="content">
        <div className="overall">
          {selectedFiltersArray.length > 0 && (
            <div className="selected-filters">
              {selectedFiltersArray.map((filter) => (
                <div key={`${filter.filterType}-${filter.filterValue}`} className="selected-filter">
                  <span>{`${filter.filterType}: ${filter.filterValue}`}</span>
                  <button onClick={() => handleRemoveSelectedFilter(filter)}>
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              ))}
              <button className="clear-filters" onClick={handleClearFilters}>
                Clear All
              </button>
            </div>
          )}
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
export default Final2;

