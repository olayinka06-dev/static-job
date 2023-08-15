import React, { useState, useEffect } from "react";
import { StaticJobContext } from "./components/provider/Context";
import staticData from "./components/staticData";


export const AppWrapper = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);

  useEffect(() => {
    setJobs(staticData);
  }, []);

  const handleRoleClick = (role) => {
    if (!selectedRole.includes(role)) {
      setSelectedRole([...selectedRole, role]);
    }
  };

  const handleLevelClick = (level) => {
    if (!selectedLevel.includes(level)) {
      setSelectedLevel([...selectedLevel, level]);
    }
  };
  const handleLanguageClick = (language) => {
    if (!selectedLanguage.includes(language)) {
      setSelectedLanguage([...selectedLanguage, language]);
    }
  };

  const handleRemoveSelectedRole = (role) => {
    const updatedSelectedRoles = selectedRole.filter(
      (selectedRole) => selectedRole !== role
    );
    setSelectedRole(updatedSelectedRoles);
  };

  const handleRemoveSelectedLevel = (level) => {
    const updatedSelectedLevels = selectedLevel.filter(
      (selectedLevel) => selectedLevel !== level
    );
    setSelectedLevel(updatedSelectedLevels);
  };

  const handleRemoveSelectedLanguage = (language) => {
    const updatedSelectedLanguages = selectedLanguage.filter(
      (selectedLanguage) => selectedLanguage !== language
    );
    setSelectedLanguage(updatedSelectedLanguages);
  };

  const handleClearSelected = () => {
    setSelectedRole([]);
    setSelectedLevel([]);
    setSelectedLanguage([]);
  };

  const filteredJobs = jobs.filter((job) => {
    const roleMatch =
      selectedRole.length === 0 || selectedRole.includes(job.role);
    const levelMatch =
      selectedLevel.length === 0 || selectedLevel.includes(job.level);
    const languageMatch =
      selectedLanguage.length === 0 ||
      job.languages.some((language) => selectedLanguage.includes(language));
    return roleMatch && levelMatch && languageMatch;
  });

  const allData = {
    jobs,
    selectedRole,
    selectedLevel,
    selectedLanguage,
    filteredJobs,
    handleRoleClick,
    handleLevelClick,
    handleLanguageClick,
    handleRemoveSelectedRole,
    handleRemoveSelectedLevel,
    handleRemoveSelectedLanguage,
    handleClearSelected,
  };
  return (
    <StaticJobContext.Provider value={{ allData }}>
      {children}
    </StaticJobContext.Provider>
  );
};
