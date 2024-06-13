//we must use 'use-cleint'

'use client'

export default function error(error) {
  console.log(error)
  return <div>{error.error.message}</div>
}
