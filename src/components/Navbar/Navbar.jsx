import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {ClerkProvider,SignInButton,SignedIn,SignedOut,UserButton} from '@clerk/nextjs'

export default function Navbar() {
  return (
      <nav className='flex items-center justify-between w-full bg-blue-500 h-[7rem] fixed z-[180] px-9 py-5'
      >
        <div className="right flex items-center">

            <Image src='/real_drible_icon-removebg-preview.png'  width={100} height={100} className='border '/>
     
            <div className='flex'> 

                <span className='ml-2 flex'>
                    <p>Find designers</p>
                    <i class="fa-solid fa-chevron-down"></i>   
                </span>
                <span className='ml-2'> 
                    <p>Inspiration</p>   
                </span>
                <span className='ml-2'>
                    <p>courses</p>   
                </span>
                <span className='ml-2'>
                    <p>Jobs</p>   
                </span>
                <span className='ml-2'>
                    <p>Go Pro</p>   
                </span>
            </div>


      </div>
     <div className="left flex  items-center">
        <input type="text" placeholder='Search...' className='rounded-3xl p-3 mr-4 outline-none'/>

         <SignedOut>
        <Link href='sign-in'>
           <button className='mr-4 p-3  rounded-2xl hover:bg-black/60 transition'>Log in</button>
        </Link>

        <Link href='sign-up'>
           <button className='mr-2 p-3 bg-black/80 rounded-2xl hover:bg-black/60 transition'>Sign up</button>
        </Link>
        </SignedOut> 
        <SignedIn>
            <UserButton/>
        </SignedIn>
     </div>
            
      </nav> 
)
}
