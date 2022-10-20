import { Box, Card, Paper, Typography, CardHeader, CardContent } from '@mui/material';
import { fShortenNumber } from 'utils/helpers';

export default function AppTrafficBySite({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(2, 1fr)',
            mt: 4,
          }}
        >
          {list.map((site) => (
            <Paper
              key={site.name}
              variant="outlined"
              sx={{ py: 7.75, textAlign: 'center', background: site.color, color: '#FFFFFF' }}
            >
              <Box sx={{ mb: 0.5 }}>{site.icon}</Box>

              <Typography variant="h4">{site.value}</Typography>

              <Typography variant="body1">{site.name}</Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
