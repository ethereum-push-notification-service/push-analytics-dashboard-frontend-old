import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function UsersData(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        style={{
          color: props.color,
          transform: 'rotate(40deg)',
          borderRadius: '50%',
          boxShadow: 'inset 0 0 1px 20px #EFEFEF',
          backgroundColor: 'transparent',
        }}
        thickness={7}
        size={120}
        value={props.value}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography style={{ fontWeight: 600 }} variant="subtitle2" component="div" color="000000">
          {`${Math.round(props.value)}%`}
        </Typography>
        <Typography style={{ fontWeight: 600 }} variant="subtitle2" component="div" color="000000">
          View Rate
        </Typography>
      </Box>
    </Box>
  );
}
