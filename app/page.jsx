import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center p-6 bg-red-400'>
      <h1 className='uppercase'>Home</h1>
      <Link href='/repos'>Repos</Link>
    </div>
  )
}
