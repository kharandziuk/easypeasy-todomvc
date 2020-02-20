import React, { memo } from 'react'

import { makeStyles, Box, Link, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

import { centerContent } from '../../../common/styles'

const useStyles = makeStyles({
  ...centerContent,
})

function NotFound() {
  const classes = useStyles()

  return (
    <Box className={classes.centerContent} position="absolute">
      <Typography color="textPrimary" variant="h1">
        Page Not Found
      </Typography>
      <Box mt={3}>
        <Link color="primary" component={RouterLink} variant="subtitle1" to="/">
          Return to Home Page
        </Link>
      </Box>
    </Box>
  )
}

export default memo(NotFound)
