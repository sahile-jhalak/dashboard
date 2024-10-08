import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calender = () => {
  return (
    <div className='m-7 md:m-10 mt-24 p-7 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calender'/>
      <ScheduleComponent
        height='650px'
        eventSettings={{dataSource:scheduleData}}
        selectedDate={new Date(2024,0,10)}
      >
        <Inject services={[Day,Week,WorkWeek,Month,Agenda,DragAndDrop,Resize]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calender