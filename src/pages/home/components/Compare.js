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
  const [converted, setConverted] = useState([]);
  const [loading, setLoading] = useState(true);

  const formattedDates = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i * 7);

    return dayjs(d.toISOString()).format('D MMM');
  });

  useEffect(() => {
    (async () => {
      const pushResponse = await PUSHPrice();

      setPush(convertDataValueToArray(pushResponse.push).slice(-7));

      setBtc(convertDataValueToArray(pushResponse.btc).slice(-7));

      setLoading(false);
    })();

    return () => {
      setLoading(false);
      setPush([]);
      setBtc([]);
    };
  }, []);

  useEffect(() => {
    setConverted([]);
    for (let i = 0; i < btc.length; i += 1) {
      const btcToSatoshi = btc[i] * 0.00000001;
      const final = push[i] / btcToSatoshi;
      setConverted((prev) => [...prev, final]);
    }
  }, [btc]);

  const chartData = [
    {
      name: 'Satoshi',
      type: 'line',
      fill: 'solid',
      color: '#E52F71',
      data: converted,
    },
    // {
    //   name: 'BTC',
    //   type: 'line',
    //   fill: 'solid',
    //   color: '#64C1E9',
    //   data: btc,
    // },
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
        seriesName: 'Satoshi',
        // opposite: true,
        // min: 19800,
        // max: 19900,
        min: Math.min(...converted),
        max: Math.max(...converted),
        axisTicks: {
          show: true,
        },
        labels: {
          style: {
            colors: '#E52F71',
          },
          formatter: (value) => parseInt(value, 10),
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
      // {
      //   seriesName: 'PUSH',
      //   // min: 0.306,
      //   // max: 0.309,
      //   min: Math.min(...push),
      //   max: Math.max(...push),
      //   axisTicks: {
      //     show: true,
      //   },
      //   labels: {
      //     style: {
      //       colors: '#E52F71',
      //     },
      //     // formatter: (value) => value.toFixed(10),
      //     // show: false,
      //   },
      //   title: {
      //     style: {
      //       color: '#E52F71',
      //     },
      //   },
      //   // tooltip: {
      //   //   enabled: true,
      //   // },
      // },
      // {
      //   seriesName: 'BTC',
      //   opposite: true,
      //   // min: 19800,
      //   // max: 19900,
      //   min: Math.min(...btc),
      //   max: Math.max(...btc),
      //   axisTicks: {
      //     show: true,
      //   },
      //   labels: {
      //     style: {
      //       colors: '#64C1E9',
      //     },
      //     formatter: (value) => value.toFixed(2),
      //     // show: false,
      //   },
      //   title: {
      //     style: {
      //       color: '#64C1E9',
      //     },
      //   },
      // },
    ],
  });

  return (
    <Grid item xs={12} md={6} lg={6}>
      <Card>
        <CardHeader title={`PUSH compared to BTC(Satoshi)`} />

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
