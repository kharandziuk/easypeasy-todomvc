import { useCallback, useState, useEffect } from 'react'

import useReactRouter from 'use-react-router'

import routes from '../../../common/routes'
import ApiService from '../../../services'
import { useStoreActions, useStoreState } from '../../../store'

function useHome() {
  const { history } = useReactRouter()
  const { private: privateRoutes } = routes

  const [isLoading, setIsLoading] = useState(false)

  const books = useStoreState(state => state.user.books)
  const setBooksStore = useStoreActions(actions => actions.user.setBooks)

  const handleOnAddBookClick = useCallback(async () => {
    history.push(privateRoutes.SCANNER)
  }, []) // eslint-disable-line

  const handleOnReturnBookClick = useCallback(
    async book => {
      setIsLoading(true)

      await ApiService.performAction(book.returnUrl)
      setBooksStore(books.filter(b => book !== b))

      setIsLoading(false)
    },
    [books], // eslint-disable-line
  )

  useEffect(() => {
    async function init() {
      setIsLoading(true)

      const { data } = await ApiService.getBooks()
      const books = data
      setBooksStore(books)

      setIsLoading(false)
    }

    init()
  }, []) // eslint-disable-line

  return {
    books,
    handleOnAddBookClick,
    handleOnReturnBookClick,
    isLoading,
  }
}

export { useHome }
