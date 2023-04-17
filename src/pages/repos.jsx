import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Loading from '../components/loading'

export default () => {
  const AnimatedDiv = ({ repo, back }) => {
    console.log({ repo })
    return (
      <motion.div
        className={`card${back ? ' back' : ''}`}
        initial={{
          y: '100vh',
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        onClick={() => (location.href = repo.html_url)}
        whileTap={{
          scale: 0.8,
        }}
        whileHover={{
          scale: 0.95,
        }}
      >
        <span className={`name${back ? ' name-back' : ''}`}>{repo.name}</span>
        <span className={`info${back ? ' name-back' : ''}`}>
          {repo.description}
        </span>
      </motion.div>
    )
  }

  const [repos, setRepos] = useState()

  useEffect(() => {
    fetch('https://api.github.com/users/richardqcarvalho/repos')
      .then(response => response.json())
      .then(repos =>
        setRepos([
          { id: uuid(), name: 'back', html_url: 'http://localhost:5173' },
          ...repos,
        ]),
      )
  }, [])

  if (!repos) {
    return <Loading />
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        {repos.map(repo => (
          <AnimatedDiv
            key={repo.id}
            repo={repo}
            back={repo.name == 'back'}
          />
        ))}
      </div>
    </div>
  )
}
