import React from 'react'
import sun from '@/assets/sunvector.png'
import star from '@/assets/star clipart dark.png'

const NavbarComponent = () => {
  return (
    <div className='flex justify-between mx-10'>
        <button>
          <img src={sun.src} alt='sun icon' className='iconS' />
        </button>
        <h1 className='bigT'>FORECAST</h1>
        <button>
          {/* ternary statement, bool switches when clicked/item is 'favorited' */}
        </button>
      </div>
  )
}

export default NavbarComponent
