import Image from 'next/image'
import React from 'react'
import Circle from './Circle'
import Services from './Services'
import styles from '../app/styles/intro.module.css'
import Link from 'next/link'

const Intro = () => {
  return (
    <div className={`w-full h-screen flex overflow-hidden relative ${styles.container}`}>
        <div className='flex-1 p-24 pr-0 flex flex-col justify-around'>
            {/* <Circle
                backgroundColor="#b0ff49"
                top="-50vh"
                left="-50vh"
                width="100vh"
                height="100vh"
            /> */}
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
                <Link href="/products" className='text-white border-none bg-green-600 p-4 rounded-xl'>مشاهده محصولات</Link>
            </div>
        </div>
        <div className='flex-1 p-24 pr-0 relative h-[75%]'>
            <Image src="/top-view-boards-mdf-material.jpg" fill style="cover" className='w-fit rounded-es-full z-[100]' alt='img' />
            {/* <Circle
                backgroundColor="#01c686"
                right="-40vh"
                width="100vh"
                height="100vh"
            /> */}
        </div>
    </div>
  )
}

export default Intro