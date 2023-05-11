import React from 'react'
import NavItem from './NavItem'
function Nav() {
  return (
    <div className='flex justify-center dark:bg-gray-600 light:bg-amber-600text-lg py-4'>
      <NavItem title="Trending" param="fetchTrending"/>
      <NavItem title="Rated" param="fetchRated"/>

    </div>
  )
}

export default Nav
