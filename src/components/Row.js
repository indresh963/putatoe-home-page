import React from 'react'
import Col from './Col'
function Row({data}) {
  return (
    <div className='row justify-content-between'>
        {
            data.map(item => (
                <Col data={item.paragraph}>
                    {item.icon}
                </Col>
            ))
        }
    </div>
  )
}

export default Row