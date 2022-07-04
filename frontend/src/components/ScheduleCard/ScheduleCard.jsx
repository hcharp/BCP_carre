import React from 'react'

import './ScheduleCard.css'

const ScheduleCard = ({ title, code, teacher, date }) => {
  return (
    <div style={{padding: '0.5rem'}}>
      {date ? <div className='scheduleCard__date'>{date}</div> : null}
      <div className='scheduleCard__body'>
        <h4 style={{color: '#c1002a'}}>{code}</h4>
        <h5>{title}</h5>
        <span>{teacher}</span>
      </div>
    </div>
  )
}

export default ScheduleCard