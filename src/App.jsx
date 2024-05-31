import * as React from 'react';
//import { useTheme } from '@mui/material/styles';
import { LineChart} from '@mui/x-charts';

import Title from './Title.jsx';


export default function Chart() {

  return (
    <React.Fragment>
      <Title>Today</Title>
      <div style={{ width: '1000px', height: '400px', flexGrow: 1, overflow: 'hidden' }}>
      <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={500}
      height={300}
      />
      </div>
    </React.Fragment>
  );
}