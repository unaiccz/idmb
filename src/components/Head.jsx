import React from 'react'
import Menu from './Menu'
import {ImHome} from 'react-icons/im'
import {HiInformationCircle} from 'react-icons/hi'
function Head() {
  return (

    <div className='flex justify-between items-center py-6'>
      {/* menu component */}
      <div className='flex'>
<Menu title="HOME" sdd="/" Icon={ImHome}/>
<Menu title="ABOUT" sdd="/about" Icon={HiInformationCircle}/>

      </div>
      {/* logo part */}
      <div className='mr-4 mt-4 max-w-6xl sm:mx-auto'>
      <h2 className='text-2xl'>
<span className='bg-amber-500 rounded-lg py-1 px-2 mr-1'>IMDb</span>
<span className='text-xl hidden sm:inline'>clone</span>

      </h2>
      </div>
    </div>
  )
}

export default Head
