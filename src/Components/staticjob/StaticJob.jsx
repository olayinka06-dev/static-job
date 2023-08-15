import React from 'react'
import { JobCard } from '../entities/JobCard'
import { useStaticJobContext } from '../provider/Context'

export const StaticJob = () => {
  const {allData} = useStaticJobContext()
  return (
    <div className={`${
      allData.selectedRole.length > 0 ||
      allData.selectedLevel.length > 0 ||
      allData.selectedLanguage.length > 0
        ? "md:py-20 py-24"
        : "py-20"
    }`}>
        <div className="container">
          <JobCard/>
        </div>
    </div>
  )
}
