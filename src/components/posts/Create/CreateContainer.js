import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import history from '../../../history'
import { actions, errorMessageSelector } from '../../../redux/posts'

import Create from './Create'

const emptyFieldErrorMessage = "Can't be empty"

const CreateContainer = () => {
  const [isSaving, setSaving] = useState(false)

  const [title, setTitle] = useState('')
  const [titleErrorMessage, setTitleErrorMessage] = useState('')
  const [categories, setCategories] = useState('')
  const [categoriesErrorMessage, setCategoriesErrorMessage] = useState('')
  const [content, setContent] = useState('')
  const [contentErrorMessage, setContentErrorMessage] = useState('')

  const [isFormEmpty, setFormEmpty] = useState(true)
  const [isUnsafeCancelModalOpen, setUnsafeCancelModalOpen] = useState(false)

  const errorMessage = useSelector(errorMessageSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!title) return

    setTitleErrorMessage('')
  }, [title])
  useEffect(() => {
    if (!content) return

    setContentErrorMessage('')
  }, [content])
  useEffect(() => {
    if (!categories) return

    setCategoriesErrorMessage('')
  }, [categories])
  useEffect(() => {
    setFormEmpty(!title && !categories && !content)
  }, [title, content, categories])

  const save = () => {
    if (!title) {
      setTitleErrorMessage(emptyFieldErrorMessage)
      return
    }

    if (!categories) {
      setCategoriesErrorMessage(emptyFieldErrorMessage)
      return
    }

    if (!content) {
      setContentErrorMessage(emptyFieldErrorMessage)
      return
    }

    setSaving(true)

    dispatch(
      actions.save({
        title,
        categories,
        content,
      })
    )
  }

  const cancel = () => {
    if (isFormEmpty) {
      history.push('/')
      return
    }

    setUnsafeCancelModalOpen(true)
  }

  const closeUnsafeCancelModal = () => setUnsafeCancelModalOpen(false)

  const createViewProps = {
    title,
    setTitle,
    titleErrorMessage,

    categories,
    categoriesErrorMessage,
    setCategories,

    content,
    setContent,
    contentErrorMessage,

    save,
    errorMessage,
    isSaving,
    cancel,
    isUnsafeCancelModalOpen,
    closeUnsafeCancelModal,
    isFormEmpty,
  }

  return <Create {...createViewProps} />
}

export default CreateContainer
