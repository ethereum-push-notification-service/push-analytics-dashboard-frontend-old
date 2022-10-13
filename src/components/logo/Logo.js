import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Logo({ disabledLink = false, sx, src = '/static/push.svg' }) {
  const logo = <Box component="img" src={src} sx={{ width: 80, height: 80, ...sx }} />;

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
