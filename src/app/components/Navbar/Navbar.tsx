import React from 'react';


function Navbar() {
  return (
    <nav className="w-full flex h-12 justify-center items-center bg-[#121212] absolute">
        <ul className='flex gap-14'>
            <li><a href="#home"><h3 className='text-white text-lg franklin font-thick hover:text-[#04ffc3] hover:shadow-[0_7px_24px_-13px] hover:shadow-[#04ffc3] border-b-[1px] border-[#04ffc3] rounded-[8px] px-4 py-1 select-none cursor-pointer    '>HOME</h3></a></li>
            <li><a href="#about"><h3 className='text-white text-lg franklin font-thick hover:text-[#04ffc3] hover:shadow-[0_7px_24px_-13px] hover:shadow-[#04ffc3] border-b-[1px] border-[#04ffc3] rounded-[8px] px-4 py-1 select-none cursor-pointer'>ABOUT</h3></a></li>
            <li><a href="#skills"><h3 className='text-white text-lg franklin font-thick hover:text-[#04ffc3] hover:shadow-[0_7px_24px_-13px] hover:shadow-[#04ffc3] border-b-[1px] border-[#04ffc3] rounded-[8px] px-4 py-1 select-none cursor-pointer'>SKILLS</h3></a></li>
            <li><a href="#projects"><h3 className='text-white text-lg franklin font-thick hover:text-[#04ffc3] hover:shadow-[0_7px_24px_-13px] hover:shadow-[#04ffc3] border-b-[1px] border-[#04ffc3] rounded-[8px] px-4 py-1 select-none cursor-pointer'>PROJECTS</h3></a></li>
            <li><a href="#contact"><h3 className='text-white text-lg franklin font-thick hover:text-[#04ffc3] hover:shadow-[0_7px_24px_-13px] hover:shadow-[#04ffc3] border-b-[1px] border-[#04ffc3] rounded-[8px] px-4 py-1 select-none cursor-pointer '>CONTACT</h3></a></li>
        </ul>
    </nav>
  )
}

export default Navbar
