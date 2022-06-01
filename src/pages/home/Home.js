import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Layout from 'components/layout';
import { AppCurrentVisits, AppWebsiteVisits, AppTrafficBySite, AppWidgetSummary } from './components';

const Home = () => {
  const theme = useTheme();

  return (
    <Layout title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Dashboard Analytics
        </Typography>


          
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Subscribers" total={714000} icon={'ant-design:user-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Number of Channels"
              total={1352831}
              color="info"
              icon={'ant-design:wechat-outlined'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Notifications"
              total={1723315}
              color="warning"
              icon={'ant-design:bell-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="$PUSH Trading Volume" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
          
          <Grid item xs={12} md={6} lg={12}>
            <AppTrafficBySite
            title="Top Channels on EPNS"
              list={[
                // ADD THE TOP CHANNELS SHOWN IN THE MOCKUP (AAVE, MAKER, ENS)
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="$PUSH compared to ETH and BTC"
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
                  name: 'BTC',
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
                { label: 'dApp', value: 4344 },
                { label: 'IOS', value: 5435 },
                { label: 'Android', value: 1443 },
                { label: 'Browser Extension', value: 4443 },
              ]}
              chartColors={[
                theme.palette.chart.violet[0],
                theme.palette.chart.blue[0],
                theme.palette.primary.main,
                theme.palette.chart.violet[1],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppWebsiteVisits
              title="Total Subscribers per week"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
              ]}
              chartData={[
                {
                  name: 'Week',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22],
                },
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={6}>
            <AppWebsiteVisits
              title="Total subscribers"
              chartLabels={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
              chartData={[
                {
                  name: 'Total subscribers',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppWebsiteVisits
              title="Total Notifications per week"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
              ]}
              chartData={[
                {
                  name: 'Week',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22],
                },
              ]}
            />
          </Grid>





          <Grid item xs={12} md={6} lg={4}>
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
      </Container>
    </Layout>
  );
};

export default Home;
