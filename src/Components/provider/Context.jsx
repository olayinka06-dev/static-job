import { createContext, useContext } from "react";

export const StaticJobContext = createContext({
    allData:{
        jobdata: [{}],
        handleRoleClick: ()=>{},
        handleLevelClick: ()=>{},
        handleLanguageClick: ()=>{},
    }
});

export const useStaticJobContext = () => (
    useContext(StaticJobContext)
)