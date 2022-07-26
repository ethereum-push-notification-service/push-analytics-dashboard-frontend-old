import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Card, CardContent, Stack } from '@mui/material';
import Layout from 'components/layout';
import { getTotalNumberOfChannels, getTotalNumberOfSubscribers } from 'utils/api';
import { AppCurrentVisits, AppWebsiteVisits, AppTrafficBySite, AppWidgetSummary } from './components';

import SubscribersWeeklyCount from './components/SubscribersWeeklyCount';
import ChannelsPerWeek from './components/ChannelsPerWeek';

const Home = () => {
  const theme = useTheme();

  const [channelsCount, setChannelsCount] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    (async () => {
      setChannelsCount(await getTotalNumberOfChannels());
      setSubscriberCount(await getTotalNumberOfSubscribers());
    })();
  }, []);

  return (
    <Layout title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h5" sx={{ mb: 5 }}>
          Ethereum Push Notification System is the biggest communication layer of web3 in the market.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Notifications" total={0} icon={'ant-design:user-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Number of Subscriptions"
              total={subscriberCount}
              color="info"
              icon={'ant-design:wechat-outlined'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Number of Channels"
              total={channelsCount}
              color="warning"
              icon={'ant-design:bell-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="$PUSH Trading Volume" total={0} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={7}>
                  <Typography variant="h5" sx={{ mt: 4, mr: 4 }}>
                    Top Channels on EPNS
                  </Typography>
                  <Box component="img" src="/static/aave-logo.svg" sx={{ width: 150, height: 100 }} />
                  <Box component="img" src="/static/maker-logo.svg" sx={{ width: 150, height: 100 }} />
                  <Box component="img" src="/static/ens-logo.svg" sx={{ width: 150, height: 100 }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="$PUSH compared to ETH and Matic"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'PUSH',
                  type: 'line',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'ETH',
                  type: 'line',
                  fill: 'solid',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Matic',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Total Users by Platform"
              chartData={[
                { label: 'dApp', value: 1 },
                { label: 'iOS', value: 1 },
                { label: 'Android', value: 1 },
                { label: 'Browser Extension', value: 1 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.red[1],
              ]}
            />
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ my: 5 }}>
          Growing at 10x rate
        </Typography>

        <Grid container spacing={3}>
          <SubscribersWeeklyCount />

          <ChannelsPerWeek />

          <Grid item xs={12} md={6} lg={6}>
            <AppWebsiteVisits
              title="Total Notifications per day"
              chartLabels={['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
              chartData={[
                {
                  name: 'Week',
                  type: 'column',
                  fill: 'solid',
                  data: [0, 0, 0, 0, 0, 0, 0],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppTrafficBySite
              title="Governance"
              list={[
                {
                  name: 'Grants Given',
                  value: 6,
                },
                {
                  name: 'Integrations',
                  value: 11,
                },
                {
                  name: 'Delegates',
                  value: 17,
                },
                {
                  name: 'Votes',
                  value: 54,
                },
              ]}
            />
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ my: 5 }}>
          Generating value for dApps, developers and users
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Card sx={{ px: 1 }}>
              <CardContent>
                <Stack direction="row" spacing={7}>
                  <Box component="img" src="/static/ens-logo.svg" sx={{ width: 120, height: 50 }} />

                  <Typography variant="h5" sx={{ mt: 10 }}>
                    500 domain names saved from expiring EPNS
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Card sx={{ px: 1 }}>
              <CardContent>
                <Stack direction="row" spacing={7}>
                  <Box component="img" src="/static/aave-logo.svg" sx={{ width: 120, height: 50 }} />

                  <Typography variant="h5" sx={{ mt: 10 }}>
                    $10M saved from liquidation using EPNS
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
