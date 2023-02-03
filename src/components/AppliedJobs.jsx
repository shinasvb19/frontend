import React from 'react'
import {format} from 'timeago.js'
const AppliedJobs = ({data}) => {
    
  console.log(data);
  return (
    <div>
       <div className="bg-[#FFFFFF] hidden md:flex flex-col     h-[350px]  w-[300px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-lg  mt-12">
      <h1 className="text-xl font-bold mt-4 text-red-600">{data.foundJob.company}</h1>
      <h1 className="text-lg font-medium ">{format(data.foundJob.createdAt)}</h1>
      <h1 className="text-lg mt-2 font-medium mb-2">{data.foundJob.jobTitle}</h1>
      <h1 className="text-lg mt-2 font-medium mb-2">{data.foundJob.jobType}</h1>
      <h1 className="text-lg mt-2 font-medium mb-2">{data.foundJob.workType}</h1>
      <button className='bg-black rounded-lg w-16 h-6 text-white'> applied </button>
    </div>
    </div>
  )
}

export default AppliedJobs
