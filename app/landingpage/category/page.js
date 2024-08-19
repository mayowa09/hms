"use client"

import Link from 'next/link'
import React from 'react'



export default function Category() {
  return (
    <>
    <div className='flex flex-col w-full m-auto items-center justify-center p-5'>
        <h1 className="items-center flex text-2xl font-medium">What's the patient category?</h1>
        <p className="text-sm text-[#424242]">Tell us the category the patient falls into to continue registration</p>
    </div>
    <br />
    <div className="h-full w-full flex items-center justify-center gap-4">
        <Link href="./category/corporateregistration">
        <div className='w-full flex flex-col bg-[#F3F3F1] gap-2 p-4 h-80 items-center justify-center text-center'>
          <h3 className="text-xl font-medium">Corporate</h3> 
          <p className="text-sm text-[#424242]">Grab the opportunity to use office HMO, <br/> NHIS, Youth service</p>
        </div>
        </Link>
        <Link href="./category/familyregistration">  
        <div className='w-full flex flex-col bg-[#E9E9E4] gap-2 p-4 h-80 items-center justify-center text-center'>
          <h3 className="text-xl font-medium">Family</h3> 
          <p className="text-sm text-[#424242]">Get the family account details to use the <br/> service with less offer</p>
        </div>
        </Link>
        <Link href="/">
        <div className='w-full flex flex-col bg-[#F3F3F1] gap-2 p-4 h-80 items-center justify-center text-center'>
          <h3 className="text-xl font-medium">Private</h3> 
          <p className="text-sm text-[#424242]">Do a seamless health care service from our <br />system and get a percent.</p>
        </div>
        </Link>
    </div>
    </>
  )
}

