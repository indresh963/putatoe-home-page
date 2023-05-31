import React from 'react'

function Navigation() {
  return (
    <nav>
      <ul className='nav justify-content-between'>
        <li className='nav-item'><a className='nav-link'>
          <div className='d-flex flex-column align-items-center'>
            <span><i class="uil uil-estate"></i>
            </span>
            <p>Home</p>
          </div>
        </a></li>
        <li className='nav-item'><a className='nav-link'>
          <div className='d-flex flex-column align-items-center'>
            <span>
              <i class="uil uil-users-alt"></i>
            </span>
            <p>Profile</p>
          </div>
        </a></li>
        <li className='nav-item'><a className='nav-link' id='img-nav'>
          <img src={require('../assets/logo.png')} width={47} className='img-fluid' alt='link' />
        </a></li>
        <li className='nav-item'><a className='nav-link'>
          <div className='d-flex flex-column align-items-center'>
            <span>
              <i class="uil uil-clipboard-alt"></i>
            </span>
            <p>Follow list</p>
          </div>
        </a></li>
        <li className='nav-item'><a className='nav-link'>
          <div className='d-flex flex-column align-items-center'>
            <span>
              <i class="uil uil-comment-lines"></i>
            </span>
            <p>Chat</p>
          </div>
        </a></li>
      </ul>
    </nav>
  )
}

export default Navigation