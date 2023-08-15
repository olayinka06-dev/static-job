import React from "react";
import { useStaticJobContext } from "./Context";

export const TodoList = () => {
  const { allData } = useStaticJobContext();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="container absolute bottom-[-45px] sm:bottom-[-40px]">
        <div
          className={`flex items-center ${allData.selectedRole.length === 1 &&
            allData.selectedLevel.length === 1 &&
            allData.selectedLanguage.length === 3 ? "py-[69px!important] sm:py-[60px!important]" : "py-[48px!important]"} justify-between md:py-[40px!important] sm:py-[60px!important] py-[59px!important] rounded-2xl px-4 bg-white w-full transition ease-linear duration-700 ${
            allData.selectedRole.length > 0 ||
            allData.selectedLevel.length > 0 ||
            allData.selectedLanguage.length > 0
              ? "h-[10vh] opacity-[100%]"
              : "opacity-0 overflow-hidden"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 sm:gap-x-5 gap-y-3 sm:gap-y-5">
            {allData.selectedRole.map((role, i) => (
              <div key={i} className="flex flex-row items-center h-[5vh]">
                <span className="bg-primary text-main font-[600] h-full rounded-tl-[10px] rounded-bl-[10px] flex items-center px-[10px] text-[14px] sm:text-[16px] sm:px-4">
                  {role}
                </span>

                <button
                  className="bg-main hover:bg-[rgb(40,57,56)] h-full px-3 rounded-tr-[10px] text-white flex items-center rounded-br-[10px]"
                  onClick={() => allData.handleRemoveSelectedRole(role)}
                >
                  x
                </button>
              </div>
            ))}
            {allData.selectedLevel.map((level, i) => (
              <div key={i} className="flex flex-row items-center h-[5vh]">
                <span className="bg-primary text-main font-[600] rounded-tl-[10px] rounded-bl-[10px] h-full flex items-center px-[10px] text-[14px] sm:text-[16px] sm:px-4">
                  {level}
                </span>
                <button
                  className="bg-main hover:bg-[rgb(40,57,56)] h-full px-3 rounded-tr-[10px] text-white flex items-center rounded-br-[10px]"
                  onClick={() => allData.handleRemoveSelectedLevel(level)}
                >
                  x
                </button>
              </div>
            ))}
            {allData.selectedLanguage.map((language, i) => (
              <div key={i} className="flex flex-row items-center h-[5vh]">
                <span className="bg-primary text-main font-[600] rounded-tl-[10px] rounded-bl-[10px] h-full flex items-center px-[10px] text-[14px] sm:text-[16px] sm:px-4">
                  {language}
                </span>
                <button
                  className="bg-main hover:bg-[rgb(40,57,56)] h-full px-3 rounded-tr-[10px] text-white flex items-center rounded-br-[10px]"
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
            <button className="text-main font-[600] hover:underline" onClick={allData.handleClearSelected}>
              Clear
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
