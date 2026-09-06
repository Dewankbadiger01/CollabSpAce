import React from 'react'
import Siderbar from './Siderbar'
import { Navigate } from 'react-router-dom'
import Sidebar from './Siderbar'
const Dashboard = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar/>
      <main className='flex-1 p-8'>
          <h1 className='text-3xl font-sans'>Welcome back Dewank !!</h1>
       <p className='mt-2 text-blue-500'>Here's what's happening with your workspaces</p>
      </main>
    </div>
  )
}

export default Dashboard
