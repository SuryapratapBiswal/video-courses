import React from 'react'
import WelcomeBanner from './_componnts/WelcomeBanner'

const Courses
    = () => {
        return (
            <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
            {/* Left Cointainer */}
                <div className='col-span-2'>
                    {/* Banner */}
                    <WelcomeBanner/>
                </div>
            {/* Right Cointainer */}
                <div>
                    Right section
                </div>
            </div>
        )
    }

export default Courses
