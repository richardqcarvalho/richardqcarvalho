import React from 'react'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center p-6 bg-red-400'>
      <h1 className='uppercase'>Home</h1>
      <a href='/repos'>Repos</a>
    </div>
  )
}
