"use client"

import Link from 'next/link'
import React from 'react'



export default function LandingPage () {
  return (
    <>
    <div className='flex flex-col w-full m-auto items-center justify-center p-5'>
        <h1 className="items-center flex text-2xl font-medium">What are your options for the patient today?</h1>
        <p className="text-sm text-[#424242]">Tell us the category the patient falls into to continue registration</p>
    </div>
    <br />

    <div className="h-full w-full flex items-center justify-center gap-4">
        <Link href="/">
        <div className='w-full flex flex-col bg-[#F3F3F1] gap-2 p-4 h-80 items-center justify-center text-center'>
          <h3 className="text-xl font-medium">Search for an existing patient</h3> 
          <p className="text-sm text-[#424242]">Do a seamless check to find patients <br /> in the database</p>
        </div>
        </Link>
        <Link href="./landingpage/category">
        <div className='w-[312px] flex flex-col bg-[#E9E9E4] gap-2 p-4 h-80 items-center justify-center text-center'>
          <h3 className="text-xl font-medium">Add New Patient</h3> 
          <p className="text-sm text-[#424242]">Begin a fresh registration process</p>
        </div>
        </Link>
    </div>
    </>
  )
}


