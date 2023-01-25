import React from 'react'
import AccountInfo from './AccountInfo'
import ProfileInfo from './ProfileInfo'

const RecruiterProfileEdit = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl font-extrabold mb-4'>EDIT INFO</h1>
      <div className='grid lg:grid-cols-10 gap-4 mb-10'>
        <div className='lg:col-start-2 col-span-4 p-4 shadow-xl'>
          <h1 className='font-bold text-2xl mb-4'>ACCOUNT INFO</h1>
          <AccountInfo/>

        </div>
        <div className='lg:col-span-4 p-4 shadow-xl '>
          <h1 className='font-bold text-2xl mb-4'>PROFILE INFO</h1>
          <ProfileInfo/>
        </div>

      </div>
      
    </div>
  )
}

export default RecruiterProfileEdit