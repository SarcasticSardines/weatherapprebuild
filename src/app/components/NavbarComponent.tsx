'use client'
import React, { useEffect, useState } from 'react'
import sun from '@/assets/sunvector.png'
import star from '@/assets/star clipart dark.png'
import starry from '@/assets/star clipart dark  fill.png'
import { Button, Modal } from 'flowbite-react'
import { getLocalStorage, removefromLocalStorage, savetoLocalStorage } from '@/utils/LocalStorage'


const NavbarComponent = () => {

  const [favBtn, setFavBtn] = useState<boolean>(false);
  const [myFav, setMyFav] = useState<string[]>();
  const [openModal, setOpenModal] = useState(false);

  const favSwitch = () => {
    setFavBtn(!favBtn);
  }

  // const handleFaves = () => {
  //   if(favBtn) {
  //     savetoLocalStorage(mycity);
  //     setFavBtn(true);
  //   }else{
  //     removefromLocalStorage(mycity);
  //     setFavBtn(false);
  //   }
  // }

  // useEffect(() => {
  //   setMyFav(getLocalStorage());
  //   setFavBtn(myfav.includes(mycity));
  // }, [mycity])

  return (
    <div className='flex justify-between mx-10'>
        <button onClick={() => setOpenModal(true)}>
          <img src={sun.src} alt='sun icon' className='iconS' />
        </button>
        <h1 className='bigT'>FORECAST</h1>
        <button onClick={favSwitch}>
          <img src={!favBtn ? star.src : starry.src} alt='star icon' className='iconS'/>
        </button>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className='favdiv flex justify-center'>
          <p className='font-bold text-4xl ms-28'>
            Favorite Locations
            </p>
            <div className="flex justify-center">
            <hr className='w-[550px]'/>
            </div>
            </Modal.Header>
        <Modal.Body className='favdiv'>
          <div className="space-y-6">
            {/* fav list displayed here, include onclick func for each to populate data, useeffect */}
            <p></p>
          </div>
        </Modal.Body>
       
      </Modal>

      </div>
  )
}

export default NavbarComponent
