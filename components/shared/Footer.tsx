'use client'
import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from 'next/link';
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-primarybasecolor py-[48px] flex flex-col gap-4'>
        
        <div className="flex flex-row w-full justify-center items-center cursor-pointer">
            <h1 className='dark:text-slate-100 text-gray-800 text-md font-regular text-center'>Ivoryedgetechnologies©<span>{currentYear}</span>. All rights reserved</h1>
        </div>
    </div>
  )
}

export default Footer