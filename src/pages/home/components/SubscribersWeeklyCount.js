import { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardHeader,
  Box,
  CircularProgress,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
} from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from 'components/chart';
import { getSubscribersWeeklyCount } from 'utils/api';
import dayjs from 'dayjs';
import _ from 'lodash';

const convertDataValueToArray = (data) => Object.values(data);

const SubscribersWeeklyCount = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(7);

  const dates = [...Array(time)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i * 7);

    return d.toISOString();
  });

  const formattedDates = [...Array(time)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i * 7);

    return dayjs(d.toISOString()).format('D MMM');
  });

  useEffect(() => {
    (async () => {
      const response = await getSubscribersWeeklyCount();

      setData(convertDataValueToArray(response).slice(-7));
      setLoading(false);
    })();

    return () => {
      setLoading(false);
      setData([]);
    };
  }, []);

  const chartData = [
    {
      name: '',
      type: 'column',
      fill: 'solid',
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

  const handleChange = (event) => {
    setTime(parseInt(event.target.value, 10));
  };

  return (
    <Grid item xs={12} md={6} lg={6}>
      <Card>
        <CardHeader
          title={`New Subscribers per Week:  ${dayjs(dates[dates.length - 1]).format('ddd, MMMM D')} - ${dayjs(
            dates[0]
          ).format('ddd, MMMM D')}`}
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
            <Box>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Filters</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={handleChange}
                >
                  <FormControlLabel value="1" control={<Radio />} label="Last 1 week" />
                  <FormControlLabel value="3" control={<Radio />} label="Last 3 week" />
                  <FormControlLabel value="5" control={<Radio />} label="Last 5 week" />
                  <FormControlLabel value="7" checked={time === 7} control={<Radio />} label="Last 7 week" />
                </RadioGroup>
              </FormControl>
            </Box>
            <ReactApexChart type="line" series={chartData} options={chartOptions} height={364} />
          </Box>
        )}
      </Card>
    </Grid>
  );
};

export default SubscribersWeeklyCount;
