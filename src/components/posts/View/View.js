import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

import Modal from '../../common/Modal'

import './View.scss'

const View = ({ title, content, categories, remove, setDeleteModalOpen, isRemoving, isDeleteModalOpen }) => {
  const openDeleteModal = () => setDeleteModalOpen(true)
  const closeDeleteModal = () => setDeleteModalOpen(false)

  return (
    <div>
      <header className="View_header">
        <Link to="/">
          <Button variant="contained">Back to posts</Button>
        </Link>

        <Button disabled={isRemoving} onClick={openDeleteModal} color="secondary" variant="contained">
          Delete
        </Button>
      </header>

      <div className="View_text">{title}</div>
      <div className="View_text">Categories: {categories}</div>
      <div className="View_text">{content}</div>

      <Modal title="Delete?" isOpen={isDeleteModalOpen} close={closeDeleteModal} okHandler={remove} okText="Aha" />
    </div>
  )
}

export default View
