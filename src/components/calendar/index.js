import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import * as locales from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Container } from './styled';

function Calendar() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 5),
      key: 'selection'
    }
  ]);

  return (
    <Container>
      <DateRange
        editableDateInputs={true}
        onChange={item => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        locale={locales['pt']}
      />
    </Container>

  )
}

export default Calendar
