import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <h1 className=''>
        <Link href='/about' className='text-2xl'>
          Home page
        </Link>
      </h1>
    </div>
  )
}
