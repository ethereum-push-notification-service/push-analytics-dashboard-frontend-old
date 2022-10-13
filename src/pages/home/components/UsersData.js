// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from 'components/chart';
import { useTheme } from '@mui/material/styles';
import _ from 'lodash';

export default function UsersData(props) {
  const chartData = [props.value];

  const theme=useTheme()

  const index = props.name.indexOf(' ', props.name.indexOf(' ') + 1);
  const firstChunk = props.name.substr(0, index);
  const secondChunk = props.name.substr(index + 1);

  const chartOptions = _.merge(BaseOptionChart(), {
    colors: [props.color],
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: false,
        startAngle: -230,
        endAngle: 130,
        offsetX: 0,
        offsetY: 0,
        hollow: {
          margin: 0,
          size: '40%',
          background: 'transparent',
          image: undefined,
          imageWidth: 150,
          imageHeight: 150,
          imageOffsetX: 0,
          imageOffsetY: 0,
          imageClipped: true,
          position: 'front',
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            offsetY: 11,
          },
          value: {
            show: true,
            fontSize: '16px',
            fontWeight: 600,
            fontFamily: undefined,
            color: theme.palette.text.primary,
            offsetY: -25,
            formatter: (val) => `${val}%`,
          },
          total: {
            show: true,
            label: props.name.length > 10 ? [firstChunk, secondChunk] : props.name,
            fontSize: props.name.length > 10 ? '12px' : '16px',
            color: theme.palette.text.primary,
          },
        },
      },
    },
    legend: {
      show: false,
    },
  });

  return <ReactApexChart type="radialBar" height={230} series={chartData} options={chartOptions} />;
}
