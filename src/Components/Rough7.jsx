import React, { useState } from "react";
import jobdata from "../alldata";

const Rough7 = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleItemClick = (item) => {
    setSelectedItems((prevState) => [...prevState, item]);
  };

  const handleRemoveItem = (item) => {
    setSelectedItems((prevState) =>
      prevState.filter((selectedItem) => selectedItem !== item)
    );
  };

  const handleClearItems = () => {
    setSelectedItems([]);
  };

  const filteredData =
    selectedFilter && jobdata.filter((job) => job[selectedFilter]);

  return (
    <div className="App">
      <div className="filters">
        <button onClick={() => handleFilterClick("role")}>Role</button>
        <button onClick={() => handleFilterClick("level")}>Level</button>
        <button onClick={() => handleFilterClick("languages")}>
          Languages
        </button>
      </div>
      {selectedFilter && (
        <div className="pop-out">
          <h3>{`Filter by ${selectedFilter}`}</h3>
          <ul>
            {filteredData.map((job) =>
              job[selectedFilter].map((item) => (
                <li key={item}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => handleItemClick(item)}
                    />
                    {item}
                  </label>
                  <button onClick={() => handleRemoveItem(item)}>X</button>
                </li>
              ))
            )}
          </ul>
          <button onClick={handleClearItems}>Clear</button>
        </div>
      )}
      <div className="job-list">
        {jobdata.map((job) => (
          <div key={job.id}>
            <h2>{job.company}</h2>
            <p>{job.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rough7;
