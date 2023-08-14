import React, { useState } from "react";
import { StaticJobContext } from "./Context";
import jobdata from "../alldata";

export const AppWrapper = ({ children }) => {
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const handleRoleClick = (role) => {
    
  };
  const handleLevelClick = (level) => {};
  const handleLanguageClick = (language) => {};
  const allData = {
    jobdata,
    handleRoleClick,
    handleLevelClick,
    handleLanguageClick,
  };
  return (
    <StaticJobContext.Provider value={{ allData }}>
      {children}
    </StaticJobContext.Provider>
  );
};
