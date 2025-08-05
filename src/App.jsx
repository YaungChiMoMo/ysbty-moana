import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser, faGem, faHeart } from '@fortawesome/free-solid-svg-icons'
import { 
  Container, 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid,
  IconButton,
  createTheme,
  ThemeProvider
} from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#F3BAC9',
    },
    secondary: {
      main: '#EBA1BA',
    },
    background: {
      default: '#F6CFD7',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.9)',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            backgroundColor: '#EBA1BA',
            '& .MuiTypography-root': {
              color: 'white',
            },
            '& .card-icon': {
              color: 'white',
            }
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              color: '#333',
              mb: 2,
              fontWeight: 'bold'
            }}
          >
            Welcome to Your Spiritual Journey
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#555',
              mb: 4 
            }}
          >
            Discover your path to inner peace and enlightenment through tarot guidance
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', p: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <FontAwesomeIcon icon={faUser} size="2x" className="card-icon" />
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                  About Me
                </Typography>
                <Typography>
                  Discover my spiritual journey and expertise in tarot reading
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', p: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <FontAwesomeIcon icon={faGem} size="2x" className="card-icon" />
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                  Tarot Packages
                </Typography>
                <Typography>
                  Explore personalized tarot reading sessions tailored to your needs
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', p: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <FontAwesomeIcon icon={faHeart} size="2x" className="card-icon" />
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                  Connect With Me
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Join our spiritual community on social media
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <IconButton 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </IconButton>
                  <IconButton 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </IconButton>
                  <IconButton 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
