import React from 'react'
import { Space_Mono } from 'next/font/google';
import Link from 'next/link';

import StoreSvg from '../svgs/store';
import UserSvg from '../svgs/user';

const spaceMone = Space_Mono({
  subsets: ["latin"],
  weight: "400",
})
const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-[12vh] w-[98vw] ">
      <div className="flex items-center relative left-[2vw]  ">
        <StoreSvg style="w-[3vw]  " />
        <h1 className={`${spaceMone.className} text-[1.5vw]`} ><Link href={"/"} className="font-bold" >NFT Makrketplace</Link></h1>
      </div>
      <div>
        <ul className=" w-[40vw] h-[8vh] text-[1vw] font-semibold flex items-center justify-around list-none relative right-[4vw] ">
          <li> <Link href={"/ranking"}>Rankings</Link> </li>
          <li> <Link href={"/marketplace"}>Marketplace </Link></li>
          <li> <Link href={"/connect-wallet"}>Connect a wallet </Link></li>
          <li> <Link href={"/sign-up"}> <div className=" rounded-[1vw]   bg-[#A259FF] h-[6.5vh] flex w-[8vw] justify-center items-center " > <UserSvg style=" w-[1.5vw] bg-[#A259FF]"/> <p className="bg-[#A259FF] ">Sign Up</p> </div></Link> </li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar;