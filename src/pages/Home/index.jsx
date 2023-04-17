import { motion } from 'framer-motion'
import React from 'react'

export default () => {
	const initial = { scale: 0 }
	const animate = { rotate: 180, scale: 1 }
	const transition = {
		type: 'spring',
		stiffness: 260,
		damping: 20,
	}

	const AnimatedDiv = () => (
		<motion.div
			className='card'
			initial={initial}
			animate={animate}
			transition={transition}
		/>
	)

	return (
		<div className='container'>
			<div className='wrapper'>
				<AnimatedDiv />
				<AnimatedDiv />
				<AnimatedDiv />
			</div>
		</div>
	)
}
