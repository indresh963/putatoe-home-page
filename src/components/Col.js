import React from 'react'

function Col({ data,children }) {
    return (
        <div className='col-3'>
            <div className='d-flex flex-column align-items-center'>
                <span>
                    {children}
                </span>
                <p className='text-center'>{data}</p>
            </div>
        </div>
    )
}

export default Col