import React from 'react';
import Style from './navbar.module.css'

function Navbar() {
  return (
    <nav className="w-full flex h-12 justify-center items-center bg-[#121212]">
        <ul className='flex gap-14'>
            <li><h3 className='text-white text-lg franklin font-thick hover:text-[#04ffc3] hover:shadow-[0_7px_24px_-13px] hover:shadow-[#04ffc3] border-b-[1px] border-[#04ffc3] rounded-[8px] px-4 py-1 select-none cursor-pointer'>HOME</h3></li>
            <li><h3 className='text-white text-lg franklin font-thick hover:text-[#04ffc3] hover:shadow-[0_7px_24px_-13px] hover:shadow-[#04ffc3] border-b-[1px] border-[#04ffc3] rounded-[8px] px-4 py-1 select-none cursor-pointer'>PROJECTS</h3></li>
            <li><h3 className='text-white text-lg franklin font-thick hover:text-[#04ffc3] hover:shadow-[0_7px_24px_-13px] hover:shadow-[#04ffc3] border-b-[1px] border-[#04ffc3] rounded-[8px] px-4 py-1 select-none cursor-pointer'>CONTACT</h3></li>
        </ul>
    </nav>
  )
}

export default Navbar
