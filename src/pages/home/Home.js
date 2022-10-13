import { useEffect, useState } from 'react';
import { Grid, Container, Typography, Box, Card, CardContent, Stack, CircularProgress } from '@mui/material';
import Layout from 'components/layout';
import {
  getTotalNumberOfChannels,
  getTotalNumberOfSubscribers,
  getTotalNotifications,
  pushTradingVolume,
  topChannels,
} from 'utils/api';
import {
  AppWidgetSummary,
  AppTrafficBySite,
  UsersData,
  SubscribersWeeklyCount,
  ChannelsPerWeek,
  NotificationsWeeklyCount,
  Compare,
} from './components';

const Home = () => {
  const [channelsCount, setChannelsCount] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [totalNotifications, setTotalNotifications] = useState(0);
  const [pushTrading, setPushTrading] = useState(0);
  const [name, setName] = useState([]);

  useEffect(() => {
    (async () => {
      setChannelsCount(await getTotalNumberOfChannels());
      setSubscriberCount(await getTotalNumberOfSubscribers());
      setTotalNotifications(await getTotalNotifications());
      setPushTrading(await pushTradingVolume());
      setName((await topChannels()).channels);
    })();
  }, []);

  return (
    <Layout title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h5" sx={{ mb: 5 }}>
          Push Protocol is the biggest communication layer of web3 in the market.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Notifications"
              total={totalNotifications}
              color="warning"
              icon={'ant-design:bell-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Number of Subscriptions"
              total={subscriberCount}
              icon={'ant-design:user-outlined'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Number of Channels"
              total={channelsCount}
              color="info"
              icon={'ant-design:wechat-outlined'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="$PUSH Trading Volume"
              total={pushTrading}
              color="error"
              icon={'ant-design:bug-filled'}
            />
          </Grid>

          <Typography variant="h5" sx={{ mt: 5, ml: 3 }}>
            Generating value for dApps, developers and users
          </Typography>
          <Grid item xs={12} md={12} lg={12} sx={{ mb: 3 }}>
            <Grid item xs={12} md={12} lg={12} sx={{ mb: 3 }}>
              <Card sx={{ px: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={7} alignItems="center">
                    <Box component="img" src="/static/ens-logo.svg" sx={{ width: 120, height: 50 }} />
                    <Typography variant="h5" sx={{ mt: 10 }}>
                      500 domain names saved from expiring using Push Protocol
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Card sx={{ px: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={7} alignItems="center">
                    <Box component="img" src="/static/aave-logo.svg" sx={{ width: 120, height: 50 }} />

                    <Typography variant="h5" sx={{ mt: 10 }}>
                      $10M saved from liquidation using Push Protocol
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Compare />
        </Grid>

        <Typography variant="h5" sx={{ mt: 5, mb: 3 }}>
          Growing at 10x rate
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <SubscribersWeeklyCount />

          <ChannelsPerWeek />

          <NotificationsWeeklyCount />

          <Grid item xs={12} md={6} lg={6}>
            <AppTrafficBySite
              title="Governance"
              list={[
                {
                  name: 'Grants Approved',
                  value: 4,
                  color: '#7A1E81',
                },
                {
                  name: 'Grants Given',
                  value: '$40K',
                  color: '#E52F71',
                },
                {
                  name: 'Proposals Received',
                  value: 20,
                  color: '#62509A',
                },
                {
                  name: 'PIPS',
                  value: 10,
                  color: '#64C1E9',
                },
              ]}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          {/* <TopChannelsView /> */}
          <Grid item xs={12} sm={12} md={12}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                alignItems: 'center',
              }}
            >
              <Grid item xs={12} sm={4} md={4}>
                <Typography variant="h4" sx={{ mt: 4, mr: 4, ml: 4, mb: 4 }}>
                  <center> Top Channels on Push Protocol</center>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  flexWrap="wrap"
                  gap={3}
                  mb={{ xs: 3, sm: 0, md: 0 }}
                >
                  {!name?.length > 0 ? (
                    <Box
                      sx={{
                        display: 'flex',
                        width: '100%',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                      }}
                      mb={{ xs: 3, sm: 0, md: 0 }}
                    >
                      <CircularProgress size={50} />
                    </Box>
                  ) : (
                    <>
                      <Box component="img" src={name[0]?.icon} sx={{ width: 75, height: 75, borderRadius: '20%' }} />
                      <Box component="img" src={name[1]?.icon} sx={{ width: 75, height: 75, borderRadius: '20%' }} />
                      <Box component="img" src={name[2]?.icon} sx={{ width: 75, height: 75, borderRadius: '20%' }} />
                      <Box component="img" src={name[3]?.icon} sx={{ width: 75, height: 75, borderRadius: '20%' }} />
                      <Box component="img" src={name[4]?.icon} sx={{ width: 75, height: 75, borderRadius: '20%' }} />
                    </>
                  )}
                </Stack>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        {/* <Typography variant="h5" sx={{ my: 5 }}>
          Generating value for dApps, developers and users
        </Typography> */}

        <Grid container direction="row" justifyContent="center" alignItems="center">
          <UsersData value={60} color={'#62509A'} name="View Rate" />
          <UsersData value={30} color={'#7A1E81'} name="Click Through Rate" />
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
