import React, { memo } from 'react'

import {
  AppBar,
  Box,
  Button,
  Card,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import iconBook from '../../../assets/icon_book.png'

import Colors from '../../../common/colors'
import { pxToRem } from '../../../utils/styles'

function BooksList({ books, handleOnAddBookClick, handleOnReturnBookClick }) {
  console.log(books)
  const classes = useStyles()

  return (
    <React.Fragment>
      <Box mt={6}>
        <Typography className={classes.description} variant="subtitle2">
          You have {books.length} books
        </Typography>
      </Box>

      <Box mt={6} mb={24}>
        {books.map(book => (
          <Card key={book.isbn} className={classes.card}>
            <Box className={classes.bookIcon}>
              <img
                width="100%"
                src={book.thumbnailUrl || iconBook}
                alt="book icon"
              />
            </Box>

            <Box ml={4} className={classes.bookSpecs}>
              <Typography className={classes.bookTitle} variant="body1">
                {book.name}
              </Typography>

              <Typography className={classes.bookCode} variant="body1">
                Code: {book.isbn}
              </Typography>

              <Typography
                onClick={() => handleOnReturnBookClick(book)}
                className={classes.bookReturn}
                variant="body1"
              >
                Return Back
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>

      <AppBar position="fixed" className={classes.appBarAddBook}>
        <Toolbar>
          <Grid container className={classes.toolbar}>
            <Grid item xs={8}>
              <Typography className={classes.description} variant="body1">
                Do you want to borrow a new book?
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Button
                size="large"
                variant="contained"
                onClick={handleOnAddBookClick}
                className={classes.button}
              >
                Add a new book
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

const useStyles = makeStyles(theme => ({
  appBarAddBook: {
    backgroundColor: Colors.white,
    bottom: 0,
    top: 'auto',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    margin: `${pxToRem(8)} 0`,
    padding: `${pxToRem(24)} ${pxToRem(12)}`,
  },
  description: {
    color: Colors.dustyGray,
    textAlign: 'left',
  },
  bookIcon: {
    margin: 'auto 0',
    width: pxToRem(48),
  },
  bookTitle: {
    fontWeight: 'bold',
  },
  bookReturn: {
    color: Colors.dogerBlue,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  button: {
    backgroundColor: Colors.dogerBlue,
    color: Colors.white,
    margin: `${pxToRem(8)} 0 ${pxToRem(8)}`,
    textTransform: 'initial',
    width: '100%',
  },
  toolbar: {
    alignItems: 'center',
    flexDirection: 'row',
  },
}))

export default memo(BooksList)
