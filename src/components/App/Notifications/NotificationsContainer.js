import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Snackbar } from '@material-ui/core'

import { actions, errorMessageSelector } from '../../../redux/posts'

const CreateContainer = () => {
  const dispatch = useDispatch()

  const errorMessage = useSelector(errorMessageSelector)

  const close = () => {
    dispatch(actions.setErrorMessage(null))
  }

  return <Snackbar open={!!errorMessage} autoHideDuration={6000} message={errorMessage} onClose={close} />
}

export default CreateContainer
