import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Logo } from 'src/components/logo';

// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto'
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
            <Box
              component={NextLink}
              href="/auth/login"
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32
              }}
            >
              <Logo />
            </Box>
          </Box>
          {children}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: 'white',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%'
            }
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              sx={{
                pt: 13,
                fontSize: '34px',
                lineHeight: '32px',
                mb: 4,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
                color: 'red', 
                fontWeight: 'bold', 
                textAlign: 'center',
              }}
              variant="h1"
            >
              Welcome to{' '}
              <Box
                component="a"
                sx={{ color: '#15B79E' }}
                target="_blank"
              >
                Tasklife.AI
              </Box>
            </Typography>
            <Typography
              align="center"
              sx={{
                mb: 3,
                fontSize: '24px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
                color: '#0039e6', 
                fontWeight: 'bold', 
              }}
              variant="subtitle1"
            >
              Elevate your daily life with Tasklife
            </Typography>
            <img
              alt=""
              src="/assets/register-page.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node
};