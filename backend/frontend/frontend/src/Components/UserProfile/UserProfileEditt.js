import React from 'react'
import BasicInfo from './BasicInfo'
import ProfileInfo from './ProfileInfo'

const UserProfileEditt = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-9 gap-6 container mx-auto mb-20'>
            <div className='lg:col-start-2 lg:col-span-3 p-4  shadow-xl lg:h-1/3'>
                <h1 className='font-extrabold text-2xl mx-6 mb-6'>BASIC INFO</h1>
                <BasicInfo/>

            </div>
            <div className='lg:col-span-4 p-4 shadow-xl'>
            <h1 className='font-extrabold text-2xl mx-6 mb-6'>PROFILE INFO</h1>
              <ProfileInfo/>
            </div>

        </div>
    </div>
  )
}

export default UserProfileEditt