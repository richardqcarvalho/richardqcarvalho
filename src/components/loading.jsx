import React from 'react'
import Loading from 'react-loading'

export default () => {
	const widthAndHeight = '15vw'

	return (
		<div className='container'>
			<div className='wrapper flex'>
				<Loading
					color='#3498db'
					width={widthAndHeight}
					height={widthAndHeight}
					type='spin'
				/>
			</div>
		</div>
	)
}
