import React from 'react'

function Partners() {
  return (
    <>
      <section className='container py-2'>
        <div className='heading rounded-2 my-2 py-2 text-center'>
          <p>All Popular Service Providers</p>
        </div>
        <div id='sub-heading' className='text-center mb-4'>
          <p className='py-2 px-5 mx-auto d-inline-block'>Construction</p>
        </div>
        <div className='horizontal-menu'>
          <div className='card p-2'>
            <div className='card-body' style={{backgroundColor:"green"}}>
              P
            </div>
            <p className='card-title my-2'>Perfect Construction</p>
          </div>
          <div className='card p-2'>
            <div className='card-body' style={{backgroundColor:"purple"}}>
              D
            </div>
            <p className='card-title my-2'>Dazzling Color</p>
          </div>
          <div className='card p-2'>
            <div className='card-body' style={{backgroundColor:"pink"}}>
              S
            </div>
            <p className='card-title my-2'>Sagar Painting Contractor</p>
          </div>
          <div className='card p-2'>
            <div className='card-body' style={{backgroundColor:"indigo"}}>
              T
            </div>
            <p className='card-title my-2'>The Karigars Interior</p>
          </div>
          <div className='card p-2'>
            <div className='card-body' style={{backgroundColor:"grey"}}>
              C
            </div>
            <p className='card-title my-2'>Creative Home Interior</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Partners