import { useCallback, useState } from 'react'

import { resetStores } from '../../../store'

const alertErrorInfo = {
  cancelLabel: 'ok',
  description: 'An unexpected error has occured. Please try again.',
}

function useMainLayout() {
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const handleErrorModal = useCallback(() => {
    setIsAlertOpen(false)
  }, [isAlertOpen]) // eslint-disable-line

  const handleOnLogoutClick = useCallback(() => {
    resetStores()
  }, [])

  return {
    alertErrorInfo,
    handleErrorModal,
    handleOnLogoutClick,
  }
}

export default useMainLayout
