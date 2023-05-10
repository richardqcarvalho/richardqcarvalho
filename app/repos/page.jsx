import Link from 'next/link'
import React from 'react'

export default async function ReposPage() {
  return (
    <div className='flex flex-col items-center justify-center p-6 bg-red-400'>
      <h1 className='uppercase text-xl'>Repos</h1>
      <Link href='/'>Home</Link>
    </div>
  )
}
