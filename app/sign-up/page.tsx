import React from 'react'
import Image from 'next/image';

import Img1 from '@/public/assets/Image Placeholder.png'
import UserSvg from '../components/svgs/user';

const SignUp:React.FC =()=> {
  return (
    <div className="border h-[100vh] " >
      <Image
        src={Img1}
        alt="img does not show"
      />
      <div>
        <h1>Create account</h1>
        <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
        <div>
          <UserSvg/>
          <input type="text" />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <button></button>
      </div>
    </div>
  )
}
export default SignUp;