import { useState, useEffect } from 'react';
import { Grid, Card, CardHeader, Box, CircularProgress } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from 'components/chart';
import { PUSHPrice } from 'utils/api';
import dayjs from 'dayjs';
import _ from 'lodash';

const convertDataValueToArray = (data) => Object.values(data);

const Compare = () => {
  const [push, setPush] = useState([]);
  const [btc, setBtc] = useState([]);
  const [loading, setLoading] = useState(true);

  const formattedDates = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i * 7);

    return dayjs(d.toISOString()).format('ddd, MMMM D');
  });

  useEffect(() => {
    (async () => {
      const pushResponse = await PUSHPrice();

      setPush(convertDataValueToArray(pushResponse.push).slice(-7));

      setBtc(convertDataValueToArray(pushResponse.btc).slice(-7));

      setLoading(false);
    })();
  }, []);

  const chartData = [
    {
      name: 'PUSH',
      type: 'line',
      fill: 'solid',
      color: '#E52F71',
      data: push,
    },
    {
      name: 'BTC',
      type: 'line',
      fill: 'solid',
      color: '#64C1E9',
      data: btc,
    },
  ];

  // const chartOptions = _.merge(BaseOptionChart(), {
  //   plotOptions: { bar: { columnWidth: '16%' } },
  //   xaxis: {
  //     categories: _.reverse(formattedDates),
  //   },
  //   yaxis: [
  //     {
  //       seriesName: 'PUSH',
  //       min: Math.min(...push),
  //       max: Math.max(...push),
  //       axisTicks: {
  //         show: true,
  //       },
  //       labels: {
  //         style: {
  //           colors: 'rgb(229,47,113)',
  //         },
  //       },
  //       title: {
  //         style: {
  //           color: 'rgb(229,47,113)',
  //         },
  //       },
  //       tooltip: {
  //         enabled: true,
  //       },
  //     },
  //     {
  //       seriesName: 'BTC',
  //       opposite: true,
  //       min: Math.min(...btc),
  //       max: Math.max(...btc),
  //       axisTicks: {
  //         show: true,
  //       },
  //       labels: {
  //         style: {
  //           colors: 'rgb(134,0,134)',
  //         },
  //       },
  //       title: {
  //         style: {
  //           color: 'rgb(134,0,134)',
  //         },
  //       },
  //     },
  //   ],
  // });

  const chartOptions = _.merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: '16%' } },
    xaxis: {
      categories: _.reverse(formattedDates),
    },
    yaxis: [
      {
        seriesName: 'PUSH',
        min: Math.min(...push),
        max: Math.max(...push),
        axisTicks: {
          show: true,
        },
        labels: {
          style: {
            colors: '#E52F71',
          },
        },
        title: {
          style: {
            color: '#E52F71',
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: 'BTC',
        opposite: true,
        min: Math.min(...btc),
        max: Math.max(...btc),
        axisTicks: {
          show: true,
        },
        labels: {
          style: {
            colors: '#64C1E9',
          },
        },
        title: {
          style: {
            color: '#64C1E9',
          },
        },
      },
    ],
  });

  return (
    <Grid item xs={12} md={6} lg={6}>
      <Card>
        <CardHeader title={`$PUSH compared to BTC`} />

        {loading ? (
          <Box
            sx={{
              display: 'flex',
              width: '50%',
              height: '400px',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
            }}
          >
            <CircularProgress size={50} />
          </Box>
        ) : (
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            {/* <ReactApexChart type="line" series={chartData} options={chartOptions} height={364} /> */}
            <ReactApexChart type="line" series={chartData} options={chartOptions} height={364} />
          </Box>
        )}
      </Card>
    </Grid>
  );
};

export default Compare;
