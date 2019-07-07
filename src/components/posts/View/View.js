import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from '@material-ui/core'

import Modal from './Modal'

import './View.scss'

const View = ({ title, content, categories, remove, setModalOpen, isRemoving, isModalOpen }) => (
  <div>
    <header className="View_header">
      <Link to="/">
        <Button variant="contained">Back to posts</Button>
      </Link>

      <Button disabled={isRemoving} onClick={() => setModalOpen(true)} variant="contained">
        Delete
      </Button>
    </header>

    <div className="View_text">{title}</div>
    <div className="View_text">Categories: {categories}</div>
    <div className="View_text">{content}</div>

    <Modal isOpen={isModalOpen} close={() => setModalOpen(false)} okHandler={remove} />
  </div>
)

export default View
