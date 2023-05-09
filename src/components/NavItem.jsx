'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from "next/navigation";
function NavItem({title, param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  
  return (
    <div>
    <Link href={`/?genre=${param}`} className={`
    m-4 hover:text-amber-600 font-semibold p-2
    
    // //to make a variable do $
    ${genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg" }
    `}
    >
    <h1>{title}</h1>
    </Link>
    </div>
  )
}

export default NavItem
