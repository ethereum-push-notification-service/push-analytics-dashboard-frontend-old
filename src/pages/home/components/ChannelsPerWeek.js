import { useState, useEffect } from 'react';
import { Grid, Box, CircularProgress, Card, CardHeader } from '@mui/material';
import { getChannelsPerWeek } from 'utils/api';
import dayjs from 'dayjs';
import _ from 'lodash';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from 'components/chart';

const convertDataValueToArray = (data) => Object.values(data);

const ChannelsPerWeek = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dates = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i * 7);

    return d.toISOString();
  });

  const formattedDates = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i * 7);

    return dayjs(d.toISOString()).format('ddd, MMMM D');
  });

  useEffect(() => {
    (async () => {
      const response = await getChannelsPerWeek();

      setData(convertDataValueToArray(response).slice(-7));
      setLoading(false);
    })();
  }, []);

  const chartData = [
    {
      name: '',
      type: 'column',
      fill: 'solid',
      color: 'rgb(103, 76, 159)',
      data,
    },
  ];

  const chartOptions = _.merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: '16%' } },
    fill: { type: chartData.map((i) => i.fill) },
    labels: _.reverse(formattedDates),
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return y.toFixed(0);
          }
          return y;
        },
      },
    },
  });

  return (
    <Grid item xs={12} md={6} lg={6}>
      <Card>
        <CardHeader
          title={`New Channels per Week:  ${dayjs(dates[dates.length - 1]).format('ddd, MMMM D')} - ${dayjs(dates[0]).format(
            'ddd, MMMM D'
          )}`}
        />

        {loading ? (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '400px',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress size={50} />
          </Box>
        ) : (
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <ReactApexChart type="line" series={chartData} options={chartOptions} height={364} />
          </Box>
        )}
      </Card>
    </Grid>
  );
};

export default ChannelsPerWeek;
