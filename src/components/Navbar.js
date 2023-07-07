import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-900 text-white h-14 flex items-center justify-between px-24 z-50'>
      <Link href="/">HPCstone</Link>
      <ul className='text-gray-300 flex gap-4 right-0'>
        <li>
          <Link href="/">خانه</Link>
        </li>
        <li>
          <Link href="/stoneblog">سنگ بلاگ</Link>
        </li>
        <li>
          <Link href="/products">محصولات</Link>
        </li>
        <li>
          <Link href="/aboutus">درباره ما</Link>
        </li>
        <li>
          <Link href="/contactus">تماس با ما</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar