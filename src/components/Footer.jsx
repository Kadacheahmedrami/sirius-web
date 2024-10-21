import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
   

    <div className='w-full bg-black text-white p-8'>
         <div className='flex w-full  items-center  lg:flex-row md:justify-around  lg:items-center mx-auto  flex-col  gap-4 '>
    {/* 1 */}
<div className='flex items-center flex-col  gap-4'>
<Image src={"/logo.svg"} className="" height={120} width={140} alt="" />
<h1 className='text-center text-darkgray text-2xl' > robotics club for enthusiastic students</h1>
</div>
{/* 2 */}
   <div className='   flex flex-col  items-center   justify-center gap-2'> 
   <Link href={""}  className='text-white   text-center mb-2   font-[400] text-2xl  '>
            About  Seruis
            </Link>
            <Link  className='text-white font-[400] text-2xl text-center ' href={""}>

         Game details
            </Link>
            <Link  className='text-white font-[400] text-2xl ' href={""}>
      Hints
            </Link>


</div>
{/* 3 */}
  <div>
    <h1 className='text-center text-darkgray text-lg  md:text-2xl'>Email us at : </h1>  
    <p className='text-center text-white   text-lg md:text-xl '>Siruis@estin.dz</p>
  </div>
  {/* 4 */}
        <div>
            <p className='text-center text-darkgray text-2xl mb-4'>don't Follow us </p>
            <div className='flex flex-row items-center justify-between '>
              <Link href={"https://www.linkedin.com/in/youcef-ldn/"}>
              <Image src={"/LinkedIn.svg"} height={60} width={60} alt="Linkedin" />

              </Link>
              <Link href={"https://web.facebook.com/profile.php?id=61558745182612"}>
              <Image src={"/Facebook.svg"} height={60} width={60} alt="facebook" />

              </Link>
              <Link href={"https://www.instagram.com/sirius.estin/"}>
              <Image src={"/Insta.svg"} height={50}   width={50} alt="insta" />

              </Link>
           
           



            </div>
        </div>
        </div>
              <p className='text-center  mt-4 py-4   text-darkgray text-2xl flex-grow-0'>2024 Siruis. All rights reserved.</p>

    </div>


  )
}

export default Footer