import { Grid, Card, CardHeader, Box } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from 'components/chart';
import ReactECharts from 'echarts-for-react';
import _ from 'lodash';

const options = {

  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 35, name: 'Extensions' },
        { value: 25, name: 'Dapp' },
        { value: 40, name: 'Mobile' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};

const ApplicationStatistics = () => (
  <Grid item xs={12} md={6} lg={6}>
    <Card sx={{ height: '100%' }}>
      <CardHeader title={`Application Usage Statistics`} />
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }} dir="ltr">
        <ReactECharts style={{ height: '80%', width: '100%' }} option={options} />
      </Box>
    </Card>
  </Grid>
);

export default ApplicationStatistics;
