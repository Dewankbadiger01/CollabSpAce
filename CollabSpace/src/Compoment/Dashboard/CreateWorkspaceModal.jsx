import React from 'react'

const CreateWorkspaceModal = () => {
  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
      <div className="bg-white w-112.5 rounded-xl p-6 shadow-xl">
        <div className='flex items-center justify-between mb-8'>
            <h2>
                 Create Workspace
            </h2>
            <button>
                *
            </button>
        </div>
      </div>
    </div>
  )
}

export default CreateWorkspaceModal
