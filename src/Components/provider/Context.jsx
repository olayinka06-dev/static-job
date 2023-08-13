import { createContext, useContext } from "react";

export const StaticJobContext = createContext();

export const useStaticJobContext = () => (
    useContext(StaticJobContext)
)