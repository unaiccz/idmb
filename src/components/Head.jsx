import React from 'react'
import Menu from './Menu'
import {ImHome} from 'react-icons/im'
import {HiInformationCircle} from 'react-icons/hi'
function Head() {
  return (
    <div>
      <div className='flex'>
<Menu title="HOME" sdd="/" Icon={ImHome}/>
<Menu title="ABOUT" sdd="/about" Icon={HiInformationCircle}/>

      </div>
      <div>
      <h2 className='text-2xl'>
<span className='mx-4 bg-amber-500 rounded-md'>IMDb</span>
<span>clone</span>

      </h2>
      </div>
    </div>
  )
}

export default Head
