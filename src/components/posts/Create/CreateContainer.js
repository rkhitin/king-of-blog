import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import history from '../../../history'
import { actions, reeditedItemSelector } from '../../../redux/posts'

import Create from './Create'

const emptyFieldErrorMessage = "Can't be empty"
const emptyPost = {
  title: '',
  categories: '',
  content: '',
}

const CreateContainer = () => {
  const [isSaving, setSaving] = useState(false)
  const reeditedItem = useSelector(reeditedItemSelector)

  const initPost = reeditedItem || emptyPost

  const [title, setTitle] = useState(initPost.title)
  const [titleErrorMessage, setTitleErrorMessage] = useState('')
  const [categories, setCategories] = useState(initPost.categories)
  const [categoriesErrorMessage, setCategoriesErrorMessage] = useState('')
  const [content, setContent] = useState(initPost.content)
  const [contentErrorMessage, setContentErrorMessage] = useState('')

  const [isFormEmpty, setFormEmpty] = useState(true)
  const [isUnsafeCancelModalOpen, setUnsafeCancelModalOpen] = useState(false)

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

    if (reeditedItem) {
      dispatch(actions.setReeditedPost(null))
    }

    dispatch(
      actions.save({
        title,
        categories,
        content,
      })
    )
  }

  const backToPosts = () => history.push('/')

  const cancel = () => {
    if (isFormEmpty) {
      if (reeditedItem) {
        dispatch(actions.setReeditedPost(null))
      }

      backToPosts()

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
    isSaving,
    cancel,
    backToPosts,
    isUnsafeCancelModalOpen,
    closeUnsafeCancelModal,
    isFormEmpty,
  }

  return <Create {...createViewProps} />
}

export default CreateContainer
