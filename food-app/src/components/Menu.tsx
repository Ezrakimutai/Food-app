import React, { useState } from 'react'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@/assets/images/public/close.jpg'
import OpenIcon from '@/assets/images/public/open.jpg'
const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div>
        <MenuIcon className='w-6 h-6' />
      </div>
      <div>
        {open ?
          <Image src={OpenIcon} alt='open' onClick={() => setOpen(true)} />
          :
          <Image src={CloseIcon} alt='close' onClick={() => setOpen(false)} />
        }


      </div>
    </>

  )
}

export default Menu