import { useCallback, useState, useEffect } from 'react'

import useReactRouter from 'use-react-router'

import routes from '../../../common/routes'
import ApiService from '../../../services'
import { useStoreActions, useStoreState } from '../../../store'

function useHome() {
  const { history } = useReactRouter()
  const { private: privateRoutes } = routes

  const todos = useStoreState(state => state.todos.todos)

  return {
    todos,
  }
}

export { useHome }
