import React from 'react'
import { ScheduleCard } from '../../components'

import './schedule.css'

const schedule = () => {
  return (
    <div className='container mt-3'>
      <div className='schedule__top'>
        <div className='schedule__time' style={{marginTop: '65px', marginBottom: '5px'}}>
          <span>9h00</span>
          <span>12h30</span>
        </div>
        <ScheduleCard
          title="Eval de perf. & sûreté de fonct."
          code="RCP103"
          teacher="JF.CULUS"
          date="Lundi 4 Juillet"
        />
        <ScheduleCard 
          title="Management d'entreprise et RSE"
          code="MSE147"
          teacher="A.GRAMONT"
          date="Mardi 5 Juillet"
        />
        <ScheduleCard 
          title="Architecture des systèmes info."
          code="NSY104"
          teacher="S.BARAKETI"
          date="Mercredi 6 Juillet"
        />
        <ScheduleCard 
          title="Projet"
          code="PRJ102"
          teacher="L.CHAARI"
          date="Jeudi 7 Juillet"
        />
        <ScheduleCard 
          title="Architecture des systèmes info."
          code="NSY104"
          teacher="S.BARAKETI"
          date="Vendredi 8 Juillet"
        />
      </div>
      <div className='schedule__bot'>
        <div className='schedule__time' style={{marginTop: '10px', marginBottom: '5px'}}>
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