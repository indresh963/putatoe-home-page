import React from 'react'

function Services() {
  return (
    <section className='container py-2'>
      <div className='heading rounded-2 my-2 py-2 text-center'>
        <p>Services We Provide</p>
      </div>
      <div className='row'>
        <div className='col-6 position-relative shadow-sm rounded-2'>
          <span className='badge bg-success position-absolute end-0'><p>20% off</p></span>
          <figure className='mb-0'>
            <img src={require('../assets/construction.jpg')} className='img-fluid' alt='servies'/>
            <figcaption className='position-absolute bottom-0 start-50 translate-middle-x'>Construction</figcaption>
          </figure>
        </div>
        <div className='col-6 position-relative shadow-sm rounded-2'>
          <span className='badge bg-success position-absolute end-0'><p>20% off</p></span>
          <figure className='mb-0'>
            <img src={require('../assets/consultancy.jpg')} className='img-fluid' alt='servies'/>
            <figcaption className='position-absolute bottom-0 start-50 translate-middle-x'>Consultancy</figcaption>
          </figure>
        </div>
      </div>
      <div className='row mt-1'>
      <div className='col-6 position-relative shadow-sm rounded-2'>
          <span className='badge bg-success position-absolute end-0'><p>20% off</p></span>
          <figure className='mb-0'>
            <img src={require('../assets/veggies.jpg')} className='img-fluid' alt='servies'/>
            <figcaption className='position-absolute bottom-0 start-50 translate-middle-x'>Daily Needs</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Services