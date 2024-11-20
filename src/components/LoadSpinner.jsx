import React from 'react'

const LoadSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/30">
          <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  )
}

export default LoadSpinner