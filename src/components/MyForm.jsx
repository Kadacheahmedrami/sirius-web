'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Ensure you have the right import for your image

const MyForm = ({userId}) => {
  const [HachedImage, setHashedImage] = useState(""); 
  const convertTobase64 = (e)=>{
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = ()=>{
      console.log(reader.result)
      setHashedImage(reader.result)
    }
    reader.onerror = error=>{
console.log("error",error) 

    }
  }

console.log(userId)
  const uploadImage = async (clkId, hashedImage) => {
    try {
      const response = await fetch('/api/updateItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerkId : clkId,      // Clerk ID of the user
          foundImage: hashedImage  // New items array
        }),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Image uploaded updated:', result);
      } else {
        console.error('Failed to upload image :', response.statusText);
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };



  return (
    <div className="grid grid-cols-2 gap-4 w-[360px] md:w-[1000px]">
    


    <a className="col-span-2 w-full flex justify-center items-center h-[50px] p-5 bg-[#AB0ABD] text-white rounded-xl mt-4 text-lg" href="https://mail.google.com/mail/u/0/#search/sirius%40estin.dz?compose=new" target="_blank" rel="noopener noreferrer">
  Contact Us
</a>



    </div>
  );
};

export default MyForm;
