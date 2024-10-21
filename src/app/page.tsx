// import { currentUser, useUser } from "@clerk/nextjs";
// import Link from "next/link";

// export default async function Home() {
//   // const { isLoaded, isSignedIn, user } = useUser();
//   const user = await currentUser();
  
//   console.log(user);
//   return (
//     <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
//       <div className="flex flex-col items-center text-center">Home Page</div>
//     </div>
//   );
// }



"use client"
import { useUser } from "@clerk/nextjs";
 import { redirect } from "next/navigation";
//  import { auth } from '@clerk/nextjs/server'

const Welcome = () => {
  const { isLoaded, isSignedIn, user } = useUser();

   if(!isSignedIn){
redirect("./sign-up")
 }else{
    redirect("./wlcm")

 }


};

export default Welcome;

