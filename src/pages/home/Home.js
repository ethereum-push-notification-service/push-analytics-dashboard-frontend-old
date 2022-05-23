import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          EPNS Analytics Home Page
        </Typography>

        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href={window.location.href}>
            EPNS Analytics
          </Link>
          {'  '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  )
}

export default Home
