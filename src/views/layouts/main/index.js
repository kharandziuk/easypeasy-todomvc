import React, { memo } from 'react'

import { AppBar, Toolbar, Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Banner from '../../components/banner'
import Loader from '../../components/loader'
import Colors from '../../../common/colors'
import { pxToRem } from '../../../utils/styles'

import defaultBannerImage from '../../../assets/img-login-background@2x.png'

import useMain from './main.hook'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: Colors.white,
    alignItems: 'flex-end',
  },
  banner: {
    minHeight: '100vh',
  },
  bannerSmall: {
    [theme.breakpoints.down('xs')]: {
      backgroundImage: `url(${defaultBannerImage})`,
      backgroundPositionY: 'bottom',
      backgroundSize: 'cover',
    },
  },
  logout: {
    color: Colors.dustyGray,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

function MainLayout({
  bannerImage,
  children,
  isLoading,
  paddingTop,
  rightPanelMaxWidth = 382,
  rightPanelWidth = '61%',
  statusMessageProps,
}) {
  const classes = useStyles()
  const { handleOnLogoutClick } = useMain()

  const showStatusMessage =
    statusMessageProps && Object.keys(statusMessageProps).length

  if (isLoading) {
    return (
      <Box flexGrow={1} bgcolor="common.white" minHeight="100vh">
        <Grid container justify="center">
          <Grid item xs={12}>
            <Loader />
          </Grid>
        </Grid>
      </Box>
    )
  }

  return (
    <Box flexGrow={1} bgcolor="common.white" minHeight="100vh">
      <Grid container justify="center">
        {!bannerImage && (
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography
                variant="body1"
                onClick={handleOnLogoutClick}
                className={classes.logout}
              >
                Log out
              </Typography>
            </Toolbar>
          </AppBar>
        )}

        {bannerImage && (
          <Grid item xs={false} sm={6} className={classes.banner}>
            <Banner image={bannerImage} />
          </Grid>
        )}
        <Grid item xs={12} sm={bannerImage ? 6 : 12}>
          <Box
            height="100%"
            maxWidth={pxToRem(700)}
            className={bannerImage ? classes.bannerSmall : null}
          >
            <Box
              height="100%"
              m="0 auto"
              maxWidth={pxToRem(rightPanelMaxWidth)}
              pb={5}
              pt={{ xs: '15%', md: showStatusMessage ? 0 : paddingTop }}
              width={{ xs: '85%', md: rightPanelWidth }}
            >
              {children}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default memo(MainLayout)
