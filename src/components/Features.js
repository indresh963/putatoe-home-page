import React from 'react'
import Row from './Row';
function Features() {
  const arr1 = [
    {
      icon: <i class="uil uil-mobile-android"></i>,
      paragraph: 'Prepaid Mobile Recharge'
    },
    {
      icon: <i class="uil uil-desktop"></i>,
      paragraph: 'DTH Recharge'
    },
    {
      icon: <i class="uil uil-rupee-sign"></i>,
      paragraph: 'Loans'
    },
    {
      icon: <i class="uil uil-megaphone"></i>,
      paragraph: 'Promotion'
    },

  ]
  const arr2 = [
    {
      icon: <i class="uil uil-newspaper"></i>,
      paragraph: 'News'
    },
    {
      icon: <i class="uil uil-comment-alt-message"></i>,
      paragraph: 'Blog'
    },
    {
      icon: <i class="uil uil-award"></i>,
      paragraph: 'Jobs'
    },
    {
      icon: <i class="uil uil-comment-alt-plus"></i>,
      paragraph: 'Anonymous Feedback'
    },

  ]
  const arr3 = [
    {
      icon: <i class="uil uil-fire"></i>,
      paragraph: 'Gas Booking'
    },
    {
      icon: <i class="uil uil-lightbulb-alt"></i>,
      paragraph: 'Electricity Bill'
    },
    {
      icon: <i class="uil uil-tear"></i>,
      paragraph: 'Water Bill'
    },
    {
      icon: <i class="uil uil-arrow-circle-right"></i>,
      paragraph: 'See more'
    },

  ]
  return (
    <section className='container py-2 shadow-sm rounded-3' id='features'>
      <div className='d-flex flex-column gap-2'>
        <Row data={arr1} />
        <Row data={arr2} />
        <Row data={arr3} />
      </div>
    </section>
  )
}

export default Features