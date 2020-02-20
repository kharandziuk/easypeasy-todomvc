import { useCallback, useState } from 'react'

import useReactRouter from 'use-react-router'

import routes from '../../../common/routes'
import ApiService from '../../../services'
import { useStoreActions } from '../../../store'

const username = process.env.REACT_APP_USERNAME
const password = process.env.REACT_APP_PASSWORD

function useLogin() {
  const { history } = useReactRouter()
  const { private: privateRoutes } = routes

  const [isLoading, setIsLoading] = useState(false)

  const setTokenStore = useStoreActions(actions => actions.user.setToken)

  const handleOnLoginClick = useCallback(async () => {
    setIsLoading(true)
    const { token } = await ApiService.login(username, password)

    setTokenStore(token)

    setIsLoading(false)
    history.push(privateRoutes.HOME)
  }, []) // eslint-disable-line

  return {
    handleOnLoginClick,
    isLoading,
  }
}

export default useLogin
