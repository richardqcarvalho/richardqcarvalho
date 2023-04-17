import { motion } from 'framer-motion'
import React from 'react'
import { v4 as uuid } from 'uuid'

export default () => {
  const AnimatedDiv = ({ option }) => {
    console.log({ option })
    return (
      <motion.div
        className='card'
        initial={{
          y: '100vh',
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        onClick={() => (location.href = location.href.concat(option.route))}
        whileTap={{
          scale: 0.8,
        }}
        whileHover={{
          scale: 0.95,
        }}
      >
        <span className='name'>{option.name}</span>
      </motion.div>
    )
  }
  const options = [{ name: 'Repos', route: 'repos' }]

  return (
    <div className='container'>
      <div className='wrapper'>
        {options.map(option => (
          <AnimatedDiv
            key={uuid()}
            option={option}
          />
        ))}
      </div>
    </div>
  )
}
