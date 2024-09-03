import React from 'react'
import Image from 'next/image'
import { Space_Mono } from 'next/font/google'

import RocketSvg from './components/svgs/rocket'

import TopCreatorsCards from './components/topCreatorsCards/topCreatorsCard'
import TrendingCards from './components/trendingCards/trendingCards'
import BrowseCategories from './components/browseCategories/browseCategories'

import Img1 from '@/public/assets/img1.png'
import Img2 from '@/public/assets/Avatar Placeholder.png'
import Img3 from '@/public/assets/trending collection/trending collection img1.png'
import Img4 from '@/public/assets/trending collection/trending collection img5.png'
import Img5 from '@/public/assets/trending collection/trending collection img7.png'
import Img6 from '@/public/assets/trending collection/trending collection img2.png'
import Img7 from '@/public/assets/trending collection/trending collection img4.png'
import Img8 from '@/public/assets/trending collection/trending collection img8.png'
import Img9 from '@/public/assets/trending collection/trending collection img3.png'
import Img10 from '@/public/assets/trending collection/trending collection img6.png'
import Img11 from '@/public/assets/trending collection/trending collection img9.png'
import Img12 from '@/public/assets/trending collection/Avatar Placeholder.png'
import Img13 from '@/public/assets/trending collection/Avatar Placeholder (1).png'
import Img14 from '@/public/assets/trending collection/Avatar Placeholder (2).png'
import Img15 from '@/public/assets/top creators/1.png'
import Img16 from '@/public/assets/top creators/2.png'
import Img17 from '@/public/assets/top creators/3.png'
import Img18 from '@/public/assets/top creators/4.png'
import Img19 from '@/public/assets/top creators/5.png'
import Img20 from '@/public/assets/top creators/6.png'
import Img21 from '@/public/assets/top creators/7.png'
import Img22 from '@/public/assets/top creators/8.png'
import Img23 from '@/public/assets/top creators/9.png'
import Img24 from '@/public/assets/top creators/10.png'
import Img25 from '@/public/assets/top creators/11.png'
import Img26 from '@/public/assets/top creators/12.png'
import Img27 from '@/public/assets/browse cate/1.png'
import Img28 from '@/public/assets/browse cate/2.png'
import Img29 from '@/public/assets/browse cate/3.png'
import Img30 from '@/public/assets/browse cate/4.png'
import Img31 from '@/public/assets/browse cate/5.png'
import Img32 from '@/public/assets/browse cate/6.png'
import Img33 from '@/public/assets/browse cate/7.png'
import Img34 from '@/public/assets/browse cate/8.png'



const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
})

const Page: React.FC = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex justify-center gap-x-[4vw] relative top-[15vh] " >
        <div className="  w-[40vw] h-[90vh] flex flex-col items-start justify-evenly  ">
          <h1 className="text-[6vw] font-semibold leading-[12vh] ">Discover Digital Art & Collect NFTs</h1>
          <p className="text-[1.9vw] font-light ">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
          <div className=" rounded-[1vw] bg-[#A259FF] h-[7vh] w-[12vw] flex items-center justify-evenly text-[1vw] "> <RocketSvg style="  h-[6vh] font-bold bg-[#A259FF] w-[1.5vw] text-[#ffffff] " /> <button>Get Started</button></div>
          <div className=" w-[100%] flex justify-between  ">
            <div className="text-[2vw] ">
              <h1 className={`${spaceMono.className} font-ligth `}>240k+ </h1>
              <p className="font-light">Total Sale</p>
            </div>
            <div className="text-[2vw] ">
              <h1 className={`${spaceMono.className}`}>100k+</h1>
              <p className="font-light">Auctions</p>
            </div>
            <div className="text-[2vw] ">
              <h1 className={`${spaceMono.className}`}>240k+</h1>
              <p className="font-light">Artists</p>
            </div>
          </div>
        </div>
        <div className=" rounded-[2vw] h-[70vh]  ">
          <Image
            src={Img1}
            alt="img1 does not show"
            className="w-[40vw] h-[65vh]  "
          />
          <div className="rounded-b-[2vw]  bg-[#3B3B3B] h-[10vh] flex flex-col justify-around ">
            <p className="  relative left-[1vw] w-[10vw] text-[1.2vw] font-semibold  bg-[#3B3B3B] ">Space Walking</p>
            <div className=" flex relative left-[1vw] bg-[#3B3B3B]  w-[7vw] justify-between ">
              <Image
                src={Img2}
                alt="img2 does not show"
                className="bg-[#3B3B3B] w-[1.5vw] "
              />
              <p className="bg-[#3B3B3B] text-[1vw] font-light ">Animakid</p>
            </div>
          </div>

        </div>
      </div>
      <div className=" relative top-[30vh]  ">
        <h1 className="text-[2.5vw] font-semibold  ">Trending Collection</h1>
        <p className="text-[1.5vw] font-light h-[12vh] ">Checkout our weekly updated trending collection.</p>
        <div className=" grid grid-cols-3 gap-[5vw] justify-items-center ">
          <TrendingCards srcImg1={Img3} srcImg2={Img6} srcImg3={Img9} srcImg4={Img12} heading="DSGN Animals" personName="MrFox" />
          <TrendingCards srcImg1={Img4} srcImg2={Img7} srcImg3={Img10} srcImg4={Img13} heading="Magic Mushrooms" personName="Shroomie" />
          <TrendingCards srcImg1={Img5} srcImg2={Img8} srcImg3={Img11} srcImg4={Img14} heading="Disco Machines" personName="BeKind2Robots" />
        </div>
      </div>
      <div className="relative top-[40vh]  w-[80vw] "  >
        <div className=" grid grid-cols-[62vw_2fr] justify-center items-end  ">
          <span>
            <h1 className=" text-[2.5vw] font-semibold ">Top Creators</h1>
            <p className=" text-[1.5vw] font-light ">Checkout Top Rated Creators on the NFT Marketplace</p>
          </span>
          <span className="rounded-[1vw] border-[#A259FF] border-[0.2vw] flex items-center justify-evenly w-[15vw] h-[7vh] " >
            <RocketSvg style="  h-[5vh] font-bold  w-[1.2vw] " />
            <button className="text-[1vw] font-medium" >View Rankings</button>
          </span>
        </div>
        <div className="relative top-[10vh]  grid grid-cols-4 gap-y-[2vw]">
          <TopCreatorsCards srcImg={Img15} name="Keepitreal" />
          <TopCreatorsCards srcImg={Img16} name="DigiLab" />
          <TopCreatorsCards srcImg={Img17} name="GravityOne" />
          <TopCreatorsCards srcImg={Img18} name="Juanie" />
          <TopCreatorsCards srcImg={Img19} name="BlueWhale" />
          <TopCreatorsCards srcImg={Img20} name="mr fox" />
          <TopCreatorsCards srcImg={Img21} name="Shroomie" />
          <TopCreatorsCards srcImg={Img22} name="robotica" />
          <TopCreatorsCards srcImg={Img23} name="RustyRobot" />
          <TopCreatorsCards srcImg={Img24} name="animakid" />
          <TopCreatorsCards srcImg={Img25} name="Dotgu" />
          <TopCreatorsCards srcImg={Img26} name="Ghiblier" />
        </div>
      </div>
      <div className="  flex flex-col justify-between relative top-[80vh] h-[140vh] ">
        <h1 className="text-[3vw] font-bold ">Browse Categories</h1>
        <div className="grid grid-cols-4 gap-[4vw] ">
          <BrowseCategories srcImg={Img27} name="Art"/>
          <BrowseCategories srcImg={Img28} name="Collectibles"/>
          <BrowseCategories srcImg={Img29} name="Music"/>
          <BrowseCategories srcImg={Img30} name="Photography"/>
          <BrowseCategories srcImg={Img31} name="Video"/>
          <BrowseCategories srcImg={Img32} name="Utility"/>
          <BrowseCategories srcImg={Img33} name="Sport"/>
          <BrowseCategories srcImg={Img34} name="Virtual Worlds"/>
        </div>
      </div>
      <div className="h-[100vh] ">

      </div>
    </div>
  )
}

export default Page;