import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

import Modal from '../../common/Modal'

import './View.scss'

const View = ({ id, title, content, categories, remove, setDeleteModalOpen, isRemoving, isDeleteModalOpen }) => {
  const openDeleteModal = () => setDeleteModalOpen(true)
  const closeDeleteModal = () => setDeleteModalOpen(false)

  return (
    <div>
      <header className="View_header">
        <Link to="/">
          <Button variant="contained">Back to posts</Button>
        </Link>

        <Button disabled={isRemoving || !id} onClick={openDeleteModal} color="secondary" variant="contained">
          Delete
        </Button>
      </header>

      <div className={classNames({ 'View_content-temp': !id })}>
        <div className="View_text">{title}</div>
        <div className="View_text">Categories: {categories}</div>
        <div className="View_text">{content}</div>
      </div>

      <Modal title="Delete?" isOpen={isDeleteModalOpen} close={closeDeleteModal} okHandler={remove} okText="Aha" />
    </div>
  )
}

View.propTypes = {
  tempId: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  setDeleteModalOpen: PropTypes.func.isRequired,
  isRemoving: PropTypes.bool.isRequired,
  isDeleteModalOpen: PropTypes.bool.isRequired,
}

export default View
