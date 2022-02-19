import React from 'react';

import HeatMap from '@uiw/react-heat-map';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns';
import { Container } from './styles';

type HeatmapValue = { date: Date; count: number };

function RandomCalendar() {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  const days = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
  return (
    <Container>
      <div className="wrapper">
        <HeatMap
          // @ts-ignore: Unreachable code error
          // eslint-disable-next-line no-use-before-define
          value={generateHeatmapValues(startDate, endDate)}
          weekLabels={days}
          startDate={startDate}
          endDate={endDate}
          width={890}
          legendCellSize={10}
        />
      </div>

      <span>Random caledar (do not represent actual data)</span>
    </Container>
  );
}

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 15;

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }

  return values;
};
export default RandomCalendar;
