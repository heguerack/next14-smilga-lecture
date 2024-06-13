import DrinksList from '@/components/Drinkslist'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  const response = await fetch(url)
  // throw error
  if (!response.ok) {
    throw new Error('Failed to fecth drinks')
  }
  const data = await response.json()
  console.log(data)
  return data
}

export default async function DrinksPage() {
  const data = await fetchDrinks()

  return (
    <div className='max-w-xl  flex flex-wrap gap-8'>
      <DrinksList drinks={data.drinks} />
    </div>
  )
}
