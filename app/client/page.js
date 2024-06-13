'use client'

import { useState } from 'react'

export default function ClientPage() {
  const [count, setCount] = useState(0)
  return (
    <div className='flex flex-col items-center'>
      <div className=''>{count}</div>
      <div className='flex gap-4'>
        <span
          onClick={() => setCount(count - 1)}
          className='bg-black text-white rounded-full p-1 cursor-pointer'>
          -
        </span>
        <span
          onClick={() => setCount((prev) => prev + 1)}
          className='bg-black text-white rounded-full p-1 cursor-pointer'>
          +
        </span>
      </div>
      <div className=''>Reset</div>
    </div>
  )
}
