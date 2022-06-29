import React from 'react'
import { ScheduleCard } from '../../components'

import './schedule.css'

const schedule = () => {
  return (
    <div className='container mt-3'>
      <div className='schedule__top'>
        <div className='schedule__time'>
          <span>9h00</span>
          <span>12h30</span>
        </div>
        <ScheduleCard 
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.Culus"
        />
        <ScheduleCard 
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.Culus"
        />
        <ScheduleCard 
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.Culus"
        />
        <ScheduleCard 
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.Culus"
        />
        <ScheduleCard 
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.Culus"
        />
      </div>
      <div className='schedule__bot'>
        <div className='schedule__time'>
          <span>13h30</span>
          <span>17h00</span>
        </div>
        <ScheduleCard 
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.Culus"
        />
        <ScheduleCard 
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.Culus"
        />
        <ScheduleCard 
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.Culus"
        />
        <ScheduleCard 
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.Culus"
        />
        <ScheduleCard 
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.Culus"
        />
      </div>
    </div>
  )
}

export default schedule