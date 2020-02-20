import React, { memo } from 'react'

import { makeStyles, Box } from '@material-ui/core'

import { pxToRem } from '../../../utils/styles'

import logo from '../../../assets/icon_Logo@2x.png'

const useStyles = makeStyles({
  logoImg: {
    // height: pxToRem(58),
    width: pxToRem(144),
  },
})

function LogoSubtitle() {
  const classes = useStyles()

  return (
    <Box width="100%" display="flex">
      <img src={logo} className={classes.logoImg} alt="AV Kobe logo" />
    </Box>
  )
}

export default memo(LogoSubtitle)
