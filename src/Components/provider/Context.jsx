import { createContext, useContext } from "react";

export const StaticJobContext = createContext({
  allData: {
    jobs: [],
    selectedRole: [],
    selectedLevel: [], 
    selectedLanguage: [],
    handleRoleClick: () => {},
    handleLevelClick: () => {},
    handleLanguageClick: () => {},
    handleRemoveSelectedRole: () => {},
    handleRemoveSelectedLevel: () => {},
    handleRemoveSelectedLanguage: () => {},
    handleClearSelected: () => {},
  },
});

export const useStaticJobContext = () => useContext(StaticJobContext);
