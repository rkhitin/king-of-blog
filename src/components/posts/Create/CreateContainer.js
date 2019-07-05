import React, { useState, useEffect } from 'react'

// import { loadingSelector, postsSelector, actions } from '../../../redux/posts'

import CreateView from './CreateView'

const CreateContainer = () => {
  const [title, setTitle] = useState('')
  const [titleErrorMessage, setTitleErrorMessage] = useState('')
  const [categories, setCategories] = useState('')
  const [content, setContent] = useState('')
  const [contentErrorMessage, setContentErrorMessage] = useState('')

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
      setTitleErrorMessage("Can't be empty")
      return
    }

    if (!content) {
      setContentErrorMessage("Can't be empty")
      return
    }
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

  return <CreateView {...createViewProps} />
}

export default CreateContainer
