import { motion } from 'framer-motion'
import React from 'react'

export default function Home() {
	const initial = { opacity: 0 }
	const animate = { opacity: 1 }

	return (
		<div className='container'>
			<motion.span
				initial={initial}
				animate={animate}
				className='home-message'
			>
				I'm working on that.
			</motion.span>
			<motion.span
				initial={initial}
				animate={animate}
				className='home-message'
			>
				{'Come back later, please :)'}
			</motion.span>
			<motion.span
				initial={initial}
				animate={animate}
				className='advice'
			>
				(click{' '}
				<motion.a
					initial={initial}
					animate={animate}
					href='https://github.com/richardqcarvalho/richardqcarvalho/tree/dev'
				>
					here
				</motion.a>{' '}
				if you wanna take a look on how it's going)
			</motion.span>
		</div>
	)
}
