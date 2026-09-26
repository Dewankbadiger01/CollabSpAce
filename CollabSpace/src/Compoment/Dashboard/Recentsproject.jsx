import React from 'react'

const Recentsproject = () => {
  return (
    <>
    <div className=' grid grid-cols-3 gap-6 mt-8'>
<div className='rounded-2xl col-span-2 bg-white border border-gray-200 p-6 shadow-sm'>
    <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl font-semibold text-slate-900'>
                Recent WorkSpace
            </h2>
           
        </div>
         <p className="text-sm text-gray-500 mt-1">
          Continue working on your projects
        </p>
          <button className="text-sm text-blue-600 hover:text-blue-700">
        View all
      </button>
    </div>
    <div className='rounded-xl flex items-center justify-between p-4 border border-gray-100'>
        <div>
            <h3 className='font-medium text-slate-800'>CollabSpace</h3>
            <p className='text-sm text-gray-500 mt-1'>5 members • Updated 2 min ago</p>
        </div>
         <span className="text-blue-600 text-lg">
        →
      </span>
    </div>
    <div className='rounded-xl flex items-center justify-between p-4 border border-gray-100'>
        <div>
            <h3 className='font-medium text-slate-800'>MeetFlow</h3>
            <p className='text-sm text-gray-500 mt-1'>2 members • Updated 29 min ago</p>
        </div>
         <span className="text-blue-600 text-lg">
        →
      </span>
    </div>
    <div className='rounded-xl flex items-center justify-between p-4 border border-gray-100'>
        <div>
            <h3 className='font-medium text-slate-800'>Ai-Resume Analyser</h3>
            <p className='text-sm text-gray-500 mt-1'> 1 members • Updated 18 hours ago</p>
        </div>
         <span className="text-blue-600 text-lg">
        →
      </span>
    </div>
    </div> 
     <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
             <h2 className="text-xl font-semibold text-slate-900">
      Quick Actions
    </h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">
      Get started quickly
    </p>
    <div className='space-y-3'>
<button className='w-full flex items-center gap-3 p-4 rounded-xl text-white bg-blue-500 hover:bg-blue-700 transition'>
    <span className='text-xl'>+</span>Create Workspace
</button>
<button className='w-full flex items-center gap-3 p-4 rounded-xl text-white bg-blue-500 hover:bg-blue-700 transition'>
    <span className='text-xl'>+</span>Create Document
</button>
<button className='w-full flex items-center gap-3 p-4 rounded-xl text-white bg-blue-500 hover:bg-blue-700 transition'>
    <span className='text-xl'>+</span>Start Meeting
</button>
    </div>
        </div>
       </div>
       
       </>
  )
}

export default Recentsproject
