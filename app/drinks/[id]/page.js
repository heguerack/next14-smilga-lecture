import Image from 'next/image'
import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import drinkImg from './drink.jpg'
const fetchSingleDrink = async (sluge) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${sluge}`

  await new Promise((resolve) => setTimeout(resolve, 1500))
  const response = await fetch(url)
  // throw error
  if (!response.ok) {
    throw new Error('Failed to fecth the single drink')
  }
  const data = await response.json()
  console.log(data)
  return data
}

export default async function DrinksSinglePage({ params }) {
  // const path = usePathname()// no need as we are using params
  console.log(params.id)
  const data = await fetchSingleDrink(params.id)
  console.log(data.drinks)
  console.log(drinkImg)
  return (
    <div className='text-xl font-medium'>
      <Link href={'/drinks'}>Back to drinks</Link>
      <div className='relative h-48 mb-4'>
        <Image
          src={data.drinks[0].strDrinkThumb}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
          alt={data.drinks[0].strDrink}
          className='rounded-md object-cover'
        />
      </div>
      {data.drinks[0].strDrink}
      <div>
        {/* <img src={drinkImg.src} alt='' /> */}
        <Image
          src={drinkImg.src}
          alt=''
          height={48}
          width={48}
          // className='w-48 h-48'
        />
      </div>
    </div>
  )
}
