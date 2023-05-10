import Link from 'next/link'
import React from 'react'

export default async function ReposPage() {
  const repos = await (
    await fetch('https://api.github.com/users/richardqcarvalho/repos')
  ).json()

  return (
    <div className='flex flex-col items-center justify-center p-6 bg-red-400'>
      <h1 className='uppercase text-xl'>Repos</h1>
      {repos.map(repo => (
        <span id={repo.id}>{repo.name}</span>
      ))}
      <Link href='/'>Home</Link>
    </div>
  )
}
