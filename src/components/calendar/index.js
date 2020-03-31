import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import * as locales from 'react-date-range/dist/locale';
import '../../css/styles.css'; // main calendar css file
import '../../css/theme/custom.css'; // theme calendar custom css file
import { Container } from './styled';

function Calendar() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(), //addDays(new Date(), 2), //for add range automatic
      key: 'selection'
    }
  ]);

  return (
    <Container>
      <DateRange
        editableDateInputs={true}
        onChange={item => setRange([item.selection])}
        moveRangeOnFirstSelection={true}
        rangeColors={['#15d4d8 ']}
        ranges={range}
        locale={locales['pt']}
        scroll={{ enable: false }}
        showDateDisplay={false}
      />
    </Container>

  )
}

export default Calendar
