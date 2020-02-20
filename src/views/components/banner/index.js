import React, { memo } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { pxToRem } from '../../../utils/styles'

const useStyles = makeStyles({
  banner: {
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    minHeight: pxToRem(250),
    height: '100%',
  },
})

function Banner({ image }) {
  const classes = useStyles(image)

  return (
    <Box
      className={classes.banner}
      style={{ backgroundImage: `url(${image})` }}
    />
  )
}

export default memo(Banner)
