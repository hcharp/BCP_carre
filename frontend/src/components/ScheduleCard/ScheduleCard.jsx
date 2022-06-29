import React from 'react'

import './ScheduleCard.css'

const ScheduleCard = ({ title, code, teacher }) => {
  return (
    <div className='scheduleCard__body'>
      <h4>{code}</h4>
      <h5>{title}</h5>
      <span>{teacher}</span>
    </div>
  )
}

export default ScheduleCard