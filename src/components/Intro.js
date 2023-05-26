import Image from 'next/image'
import React from 'react'
import Circle from './Circle'
import Services from './Services'

const Intro = () => {
  return (
    <div className='container w-full h-screen flex overflow-hidden relative'>
        <div className='flex-1 p-24 pr-0 flex flex-col justify-around'>
            <Circle
                backgroundColor="#b0ff49"
                top="-50vh"
                left="-50vh"
                width="100vh"
                height="100vh"
            />
            <div>
                <h1 className='text-5xl '>
                    <span className='text-green-600'>H P C </span>STONE
                </h1>
                <p className='text-xl'>Hard Precious Colorful</p>
            </div>
            <div>
                <p className='text-2xl'>خرید سریع و مطمئن و ارزان مرغوب ترین سنگ های قروه</p>
            </div>
            <div>
                <button className='text-white border-none bg-green-600 p-4 rounded-xl block'>مشاهده محصولات</button>
            </div>
        </div>
        <div className='flex-1 p-24 pr-0 relative h-[75%]'>
            <Image src="/img/top-view-boards-mdf-material.jpg" fill style="cover" className='w-fit rounded-es-3xl' alt='img' />
            <Circle
                backgroundColor="#01c686"
                right="-40vh"
                width="100vh"
                height="100vh"
            />
        </div>
    </div>
  )
}

export default Intro