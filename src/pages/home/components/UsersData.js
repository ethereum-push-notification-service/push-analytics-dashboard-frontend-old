// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from 'components/chart';
import _ from 'lodash';

export default function UsersData(props) {
  const chartData = [props.value];

  const index = props.name.indexOf(' ', props.name.indexOf(' ') + 1);
  const firstChunk = props.name.substr(0, index);
  const secondChunk = props.name.substr(index + 1);
  // console.log(firstChunk, secondChunk);

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
            color: '#000000',
            offsetY: -25,
            formatter: (val) => `${val}%`,
          },
          total: {
            show: true,
            label: props.name.length > 10 ? [firstChunk, secondChunk] : props.name,
            fontSize: props.name.length > 10 ? '12px' : '16px',
            color: '#000000',
          },
        },
      },
    },
    // plotOptions: {
    //   radialBar: {
    //     inverseOrder: false,
    //     startAngle: -230,
    //     endAngle: 130,
    //     offsetX: 0,
    //     offsetY: 0,
    //     hollow: {
    //       margin: 0,
    //       size: '50%',
    //       background: 'transparent',
    //       image: undefined,
    //       imageWidth: 150,
    //       imageHeight: 150,
    //       imageOffsetX: 0,
    //       imageOffsetY: 0,
    //       imageClipped: true,
    //       position: 'front',
    //       dropShadow: {
    //         enabled: false,
    //         top: 0,
    //         left: 0,
    //         blur: 3,
    //         opacity: 0.5,
    //       },
    //     },
    //     dataLabels: {
    //       show: true,
    //       name: {
    //         show: true,
    //         fontSize: '16px',
    //         fontFamily: undefined,
    //         fontWeight: 600,
    //         color: undefined,
    //         offsetY: -10,
    //       },
    //       value: {
    //         show: true,
    //         fontSize: '14px',
    //         fontFamily: undefined,
    //         fontWeight: 400,
    //         color: undefined,
    //         offsetY: 16,
    //         formatter: function (val) {
    //           return val + '%';
    //         },
    //       },
    //       total: {
    //         show: false,
    //         label: 'Total',
    //         color: '#373d3f',
    //         fontSize: '16px',
    //         fontFamily: undefined,
    //         fontWeight: 600,
    //         formatter: function (w) {
    //           return (
    //             w.globals.seriesTotals.reduce((a, b) => {
    //               return a + b;
    //             }, 0) /
    //               w.globals.series.length +
    //             '%'
    //           );
    //         },
    //       },
    //     },
    //   },
    // },
    legend: {
      show: false,
    },
  });

  return (
    // <Box sx={{ position: 'relative', display: 'inline-flex' }}>
    //   <CircularProgress
    //     variant="determinate"
    //     style={{
    //       color: props.color,
    //       transform: 'rotate(40deg)',
    //       borderRadius: '50%',
    //       boxShadow: 'inset 0 0 1px 20px #EFEFEF',
    //       backgroundColor: 'transparent',
    //     }}
    //     thickness={7}
    //     size={120}
    //     value={props.value}
    //   />
    //   <Box
    //     sx={{
    //       top: 0,
    //       left: 0,
    //       bottom: 0,
    //       right: 0,
    //       position: 'absolute',
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //     }}
    //   >
    //     <Typography style={{ fontWeight: 600 }} variant="subtitle2" component="div" color="000000">
    //       {`${Math.round(props.value)}%`}
    //     </Typography>
    //     <Typography style={{ fontWeight: 600 }} variant="subtitle2" component="div" color="000000">
    //       View Rate
    //     </Typography>
    //   </Box>
    // </Box>
    <ReactApexChart type="radialBar" height={230} series={chartData} options={chartOptions} />
  );
}
