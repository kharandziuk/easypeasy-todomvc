import React, { memo } from 'react'

import { Box, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  centerContent: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

function Loader({ className, ...props }) {
  const classes = useStyles()
  const loaderClassName = `${classes.centerContent} ${
    className ? className : ''
  }`

  return (
    <Box className={loaderClassName} position="absolute">
      <CircularProgress {...props} />
    </Box>
  )
}

export default memo(Loader)
