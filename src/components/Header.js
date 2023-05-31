import React from 'react';
function Header() {
  return (
    <>
      <header className='header-container'>
        <div className='header-container px-2 pt-2'>
          <div className='d-flex align-items-center gap-2' id='upper-part'>
            <span>
              <i class="uil uil-location-pin-alt"></i>
            </span>
            <input className='form-control flex-fill' placeholder='Enter your address' type='text' id='address' />
            <span id='bell'>
              <i class="uil uil-bell"></i>
            </span>
            <span>
              <i class="uil uil-shopping-cart"></i>
            </span>
          </div>
        </div>
        <div className='header-container px-2 pb-2 pt-3' id='search-header'>
          <div className='d-flex align-items-center gap-2 px-2'>
            <div id='dummy-input' className='flex-fill d-flex align-items-center px-2 rounded-2'>
              <span id='search-icon'>
                <i class="uil uil-search"></i>
              </span>
              <input className='form-control' placeholder='Search for products' type='search' id='search' />
            </div>
            <span>
              <i id='mic' class="uil uil-microphone"></i>
            </span>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header