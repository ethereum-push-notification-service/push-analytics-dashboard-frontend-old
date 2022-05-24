import Layout from 'components/layout'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Home = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}  >
        <Grid container spacing={3} >
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 160,
                borderRadius: 5,
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                textAlign='center'
              >
                Number of Subscriptions
              </Typography>

              <Typography component="p" variant="h4" align='center' mt="10px">
                1234
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }} align='center' mt="20px">
                in 24 hours
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 160,
                borderRadius: 5,
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                align='center'
              >
                Number of Notifications
              </Typography>

              <Typography component="p" variant="h4" align='center' mt="10px">
                1234
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}  align='center' mt="20px">
                in 24 hours
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 160,
                borderRadius: 5,
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                align='center'
              >
                $PUSH Trading Volume
              </Typography>

              <Typography component="p" variant="h4" align='center' mt="10px">
                1234
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}  align='center' mt="20px">
                in 24 hours
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>


      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                display: 'block',
                flexDirection: 'row',
                height: 100,
                borderRadius: 5,
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                textAlign="left"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                color="#8F8B8B"
              >
                Total Users
              </Typography>
              <Typography component="p" variant="h4" textAlign="right" color="#8F8B8B">
                1234
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>


      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 100,
                borderRadius: 5,
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="#8F8B8B"
                gutterBottom
                textAlign="left"
                justifyContent=""
              >
                Number of Channels
              </Typography>
              <Typography component="p" variant="h4" textAlign="right" color="#8F8B8B">
                1234
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      

      <Container maxWidth="md" sx={{ m:4, mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                bgcolor: '#E52F71',
                display: 'flex',
                flexDirection: 'column',
                height: 160,
                borderRadius: 12,
              }}
            >
              <Typography component="p" variant="h4" color='white'  align='center'  marginTop="50px">
                6
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                color='white'
                gutterBottom
                align='center'
              >
                Grants Given
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" sx={{ m: 30, mt: 4, mb: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                bgcolor: '#AA1DAA',
                display: 'flex',
                flexDirection: 'column',
                height: 160,
                borderRadius: 12,
              }}
            >
              <Typography component="p" variant="h4" color='white'  align='center' marginTop="50px">
                11
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                color='white'
                gutterBottom
                align='center'
              >
                Integrations
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>


      <Container maxWidth="md" sx={{ m:4, mt: 4, mb: 4}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                bgcolor: '#860486',
                display: 'flex',
                flexDirection: 'column',
                height: 160,
                borderRadius: 12,
              }}
            >
              <Typography component="p" variant="h4" color='white'  align='center'  marginTop="50px">
                17
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                gutterBottom
                color='white'
                align='center'
              >
                Delegates
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>


      <Container maxWidth="md" sx={{m: 30, mt: 4, mb: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                bgcolor: '#3EC3ED',
                display: 'flex',
                flexDirection: 'column',
                height: 160,
                borderRadius: 12,
              }}
            >
              <Typography component="p" variant="h4" color='white' align='center'  marginTop="50px">
                54
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                color='white'
                gutterBottom
                align='center'
              >
                Votes
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </Layout>
  )
}

export default Home