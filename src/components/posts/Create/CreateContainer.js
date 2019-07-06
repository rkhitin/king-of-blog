import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from '../../../redux/posts'

import Create from './Create'

const emptyFieldErrorMessage = "Can't be empty"

const CreateContainer = () => {
  const [title, setTitle] = useState('')
  const [titleErrorMessage, setTitleErrorMessage] = useState('')
  const [categories, setCategories] = useState('')
  const [content, setContent] = useState('')
  const [contentErrorMessage, setContentErrorMessage] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (!title) return

    setTitleErrorMessage('')
  }, [title])
  useEffect(() => {
    if (!content) return

    setContentErrorMessage('')
  }, [content])

  const save = () => {
    if (!title) {
      setTitleErrorMessage(emptyFieldErrorMessage)
      return
    }

    if (!content) {
      setContentErrorMessage(emptyFieldErrorMessage)
      return
    }

    dispatch(
      actions.save({
        title,
        categories,
        content,
      })
    )

    console.log('nya')
  }

  const createViewProps = {
    title,
    setTitle,
    titleErrorMessage,
    categories,
    setCategories,
    content,
    setContent,
    contentErrorMessage,
    save,
  }

  return <Create {...createViewProps} />
}

export default CreateContainer
