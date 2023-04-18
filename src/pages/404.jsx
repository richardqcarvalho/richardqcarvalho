import { motion } from 'framer-motion'
import React from 'react'

export default function Error() {
	return (
		<div className='container error'>
			<motion.span className='home-message'>Error 404</motion.span>
			<motion.span className='advice'>Page not found</motion.span>
		</div>
	)
}
