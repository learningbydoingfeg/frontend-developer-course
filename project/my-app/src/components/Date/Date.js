import React from 'react'

const Date = props => (
  <div className="post-date">
    <span className="day">{props.day}</span>
    <span className="month">{props.month}</span>
  </div>
)

export default Date
