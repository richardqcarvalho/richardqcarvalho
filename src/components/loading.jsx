import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
  const widthAndHeight = '15vw'

  return (
    <div className='container'>
      <div className='wrapper flex'>
        <ReactLoading
          color='#3498db'
          width={widthAndHeight}
          height={widthAndHeight}
          type='spin'
        />
      </div>
    </div>
  )
}

export default Loading
