import React, { memo } from 'react'

import { Box, Button, Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import iconEmpty from '../../../assets/icon_Empty@2x.png'

import Colors from '../../../common/colors'
import { pxToRem } from '../../../utils/styles'

const useStyles = makeStyles(theme => ({
  card: {
    padding: `${pxToRem(24)} ${pxToRem(12)}`,
  },
  description: {
    textAlign: 'center',
  },
  cardIcon: {
    margin: 'auto',
    width: pxToRem(64),
  },
  button: {
    backgroundColor: Colors.dogerBlue,
    color: Colors.white,
    marginTop: pxToRem(24),
    textTransform: 'initial',
    width: '100%',
  },
}))

function EmptyBooks({ handleOnAddBookClick }) {
  const classes = useStyles()

  return (
    <Box mt={24}>
      <Card className={classes.card}>
        <Box m={12} className={classes.cardIcon}>
          <img width="100%" src={iconEmpty} alt="empty books" />
        </Box>

        <Typography className={classes.description} variant="body1">
          Your haven’t borrowed any books yet
        </Typography>

        <Button
          size="large"
          variant="contained"
          onClick={handleOnAddBookClick}
          className={classes.button}
        >
          Add a new book
        </Button>
      </Card>
    </Box>
  )
}

export default memo(EmptyBooks)
