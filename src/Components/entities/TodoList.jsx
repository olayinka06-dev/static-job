import React from "react";
import { useStaticJobContext } from "../provider/Context";

export const TodoList = () => {
  const { allData } = useStaticJobContext();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="container absolute bottom-[-30px]">
        <div
          className={`flex justify-between py-2 px-3 bg-white w-full transition ease-linear duration-700 ${
            allData.selectedRole.length > 0 ||
            allData.selectedLevel.length > 0 ||
            allData.selectedLanguage.length > 0
              ? "h-[10vh] opacity-[100%]"
              : "opacity-0 overflow-hidden"
          }`}
        >
          <div className="grid grid-cols-5">
            {allData.selectedRole.map((role, i) => (
              <div key={i} className="">
                <span>{role}</span>
                <button onClick={() => allData.handleRemoveSelectedRole(role)}>
                  x
                </button>
              </div>
            ))}
            {allData.selectedLevel.map((level, i) => (
              <div key={i} className="">
                <span>{level}</span>
                <button
                  onClick={() => allData.handleRemoveSelectedLevel(level)}
                >
                  x
                </button>
              </div>
            ))}
            {allData.selectedLanguage.map((language, i) => (
              <div key={i} className="">
                <span>{language}</span>
                <button
                  onClick={() => allData.handleRemoveSelectedLanguage(language)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          {allData.selectedRole.length > 0 ||
          allData.selectedLevel.length > 0 ||
          allData.selectedLanguage.length > 0 ? (
            <button className="" onClick={allData.handleClearSelected}>
              Clear
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
