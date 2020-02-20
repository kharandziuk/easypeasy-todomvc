import React, { memo } from 'react'

import { Box, Typography } from '@material-ui/core'

import MainLayout from '../../layouts/main'


function Home() {

  return (<>Kapa</>)

  //return (
  //  <MainLayout isLoading={isLoading} paddingTop={28}>
  //    <Box>
  //      <LogoSubtitle />
  //      <Box mt={10}>
  //        <Typography variant="h4">
  //          KOBE is simple, just scan the barcode on any book when you take it,
  //          and when you are done scan it again.
  //        </Typography>
  //      </Box>

  //      {isBooksListEmpty ? (
  //        <EmptyBooks handleOnAddBookClick={handleOnAddBookClick} />
  //      ) : (
  //        <BooksList
  //          books={books}
  //          handleOnAddBookClick={handleOnAddBookClick}
  //          handleOnReturnBookClick={handleOnReturnBookClick}
  //        />
  //      )}
  //    </Box>
  //  </MainLayout>
  //)
}

export default memo(Home)
