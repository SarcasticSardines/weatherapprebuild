import React from 'react'
import holder from '@/assets/star clipart fill.png'

const ForecastComponent = () => {
  return (
    <div className="grid grid-cols-5 mx-28 mb-10">
        {/* forecast section, 1 row 5 cols */}
        <div className="flex justify-center text-center w-[275px] h-[300px] gradiv">
          <div className="grid gap-0 mt-6">
            <h3>DayofWeek</h3>
            <p className='h-[20px]'>110</p>
            <div className="flex justify-center h-[3px] py-0 my-0">
            <hr className='w-[50px] py-0 my-0'/>
            </div>
            <p className='h-[20px]'>100</p>
            <div className="flex justify-center">
            <img src={holder.src} className='w-20 h-20' />
            </div>
            <p>weather description</p>
          </div>
        </div>


      </div>
  )
}

export default ForecastComponent
