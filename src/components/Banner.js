import React from 'react'

function Banner() {
  return (
    <div className='d-flex justify-content-center'>
    <img src={require('../assets/banner.png')} className='img-fluid shadow-sm rounded-3 mb-2' alt='banner'/>

    </div>
  )
}

export default Banner