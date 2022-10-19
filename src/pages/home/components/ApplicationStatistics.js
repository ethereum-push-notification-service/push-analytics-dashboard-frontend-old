import { Grid, Card, CardHeader, Box } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from 'components/chart';
import _ from 'lodash';

const ApplicationStatistics = () => {
  const chartData = [35, 25, 40];
  const chartOptions = _.merge(BaseOptionChart(), {
    
    labels: ['Extensions', 'Dapp', 'Mobile'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });
  return (
    <Grid item xs={12} md={6} lg={6}>
      <Card>
        <CardHeader title={`Application Usage Statistics`} />
        <Box sx={{ py: 9.1, display: 'flex', justifyContent: 'center' }} dir="ltr">
          <ReactApexChart type="pie" width={380} series={chartData} options={chartOptions} />
        </Box>
      </Card>
    </Grid>
  );
};

export default ApplicationStatistics;
