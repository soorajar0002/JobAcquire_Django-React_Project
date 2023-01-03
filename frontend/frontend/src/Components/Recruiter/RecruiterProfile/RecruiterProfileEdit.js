import React from 'react'
import AccountInfo from './AccountInfo'
import ProfileInfo from './ProfileInfo'

const RecruiterProfileEdit = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl font-extrabold'>EDIT INFO</h1>
      <div className='grid lg:grid-cols-2 gap-4 mb-10'>
        <div className='lg:col-span-1 p-4 shadow-xl'>
          <h1 className='font-bold text-2xl'>ACCOUNT INFO</h1>
          <AccountInfo/>

        </div>
        <div className='lg:col-span-1 p-4 shadow-xl'>
          <h1 className='font-bold text-2xl'>PROFILE INFO</h1>
          <ProfileInfo/>
        </div>

      </div>
      
    </div>
  )
}

export default RecruiterProfileEdit