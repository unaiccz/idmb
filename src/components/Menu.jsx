import React from 'react'
import Link from 'next/link'
function Menu({title, sdd,Icon}) {
  return (
<>
<div>
      <Link href={sdd} className='mx-8 lg:mx-12 hover:text-amber-500'>
      <Icon className='text-2xl sm:hidden'/>
      <p className='hidden sm:inline my-2 text-sm'>{title}</p>  
      </Link>
    </div>
    <div>

    </div>
</>
  )
}

export default Menu
