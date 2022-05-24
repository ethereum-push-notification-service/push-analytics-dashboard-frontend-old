import Layout from 'components/layout'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { width } from '@mui/system'


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
                background: 'linear-gradient(90deg, #E52F71 10%, #860486 40%, #3EC3ED 90%)',
                backgroundRepeat: "no-repeat",
                width:"100%",
                backgroundPositionY: "-110px",
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="white"
                gutterBottom
                textAlign='center'
              >
                Number of Subscriptions
              </Typography>

              <Typography component="p" variant="h4" align='center' mt="10px" color="#8F8B8B">
                1234
              </Typography>
              <Typography color="#CAC2C2" sx={{ flex: 1 }} align='center' mt="20px">
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
                background: 'linear-gradient(90deg, #E52F71 10%, #860486 40%, #3EC3ED 90%)',
                backgroundRepeat: "no-repeat",
                width:"100%",
                backgroundPositionY: "-110px",
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="white"
                gutterBottom
                textAlign='center'
              >
                Number of Notifications
              </Typography>

              <Typography component="p" variant="h4" align='center' mt="10px" color="#8F8B8B">
                1234
              </Typography>
              <Typography color="#CAC2C2" sx={{ flex: 1 }}  align='center' mt="20px">
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
                background: 'linear-gradient(90deg, #E52F71 10%, #860486 40%, #3EC3ED 90%)',
                backgroundRepeat: "no-repeat",
                width:"100%",
                backgroundPositionY: "-110px",
                
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="white"
                gutterBottom
                textAlign='center'
              >
                $PUSH Trading Volume
              </Typography>

              <Typography component="p" variant="h4" align='center' mt="10px" color="#8F8B8B">
                1234
              </Typography>
              <Typography color="#CAC2C2" sx={{ flex: 1 }}  align='center' mt="20px">
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
                textAlign="center"
                mt='10px'
              >
                Total Users
              </Typography>
              <Typography component="p" variant="h4" textAlign="center" color="#8F8B8B">
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
                textAlign="center"
                mt='10px'
              >
                Number of Channels
              </Typography>
              <Typography component="p" variant="h4" textAlign="center" color="#8F8B8B">
                1234
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      

      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                bgcolor: '#E52F71',
                display: 'flex',
                flexDirection: 'column',
                height: 120,
                width: 120,
                borderRadius: 5,
              }}
            >
              <Typography component="p" variant="h3" color='white'  align='center'  marginTop="10px">
                6
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                color='white'
                gutterBottom
                align='center'
                marginTop="0px"
              >
                Grants Given
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                bgcolor: '#AA1DAA',
                display: 'flex',
                flexDirection: 'column',
                height: 120,
                width: 120,
                borderRadius: 5,
              }}
            >
              <Typography component="p" variant="h3" color='white'  align='center' marginTop="10px">
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


      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                bgcolor: '#860486',
                display: 'flex',
                flexDirection: 'column',
                height: 120,
                width: 120,
                borderRadius: 5,
              }}
            >
              <Typography component="p" variant="h3" color='white'  align='center'  marginTop="10px">
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


      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                bgcolor: '#3EC3ED',
                display: 'flex',
                flexDirection: 'column',
                height: 120,
                width: 120,
                borderRadius: 5,
              }}
            >
              <Typography component="p" variant="h3" color='white' align='center' marginTop="10px">
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