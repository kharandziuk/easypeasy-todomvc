import React, { memo } from 'react'

import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LogoSubtitle from '../../components/logo-subtitle'
import MainLayout from '../../layouts/main'

import bannerLoginImage from '../../../assets/img-login-background@2x.png'
import iconGoogle from '../../../assets/icon_Google.svg'

import useLogin from './login.hook'
import Colors from '../../../common/colors'
import { pxToRem } from '../../../utils/styles'

const useStyles = makeStyles(theme => ({
  banner: {
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    minHeight: pxToRem(250),
    height: '100%',
    width: '100%',
  },
  subtitle: {
    fontWeight: '500',
  },
  button: {
    backgroundColor: Colors.white,
    color: Colors.regalBlue,
    justifyContent: 'flex-start',
    textTransform: 'initial',
    width: '100%',
  },
  icon: {
    heigth: pxToRem(24),
    width: pxToRem(24),
  },
}))

function IconGoogle(props) {
  return (
    <Box>
      <img width="100%" src={iconGoogle} alt="google icon" />
    </Box>
  )
}

function Login() {
  const classes = useStyles()
  const { handleOnLoginClick, isLoading } = useLogin()

  return (
    <MainLayout
      isLoading={isLoading}
      paddingTop={28}
      bannerImage={bannerLoginImage}
    >
      <Box>
        <LogoSubtitle />
        <Box mt={10}>
          <Typography variant="h3">
            Some nice text goes here about our product.
          </Typography>
        </Box>

        <Box mt={6}>
          <Typography className={classes.subtitle} variant="subtitle1">
            Login using your Google Account
          </Typography>

          <Box mt={4}>
            <Button
              id="btnLogin"
              size="large"
              variant="contained"
              onClick={handleOnLoginClick}
              className={classes.button}
            >
              <Box mt={1} mr={4}>
                <IconGoogle className={classes.icon} />
              </Box>
              Login with Google
            </Button>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default memo(Login)
