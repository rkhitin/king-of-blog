import React from 'react'
import PropTypes from 'prop-types'
import { Card, Modal as MuiModal, Button } from '@material-ui/core'

import './Modal.scss'

const Modal = ({ title, isOpen, close, okHandler, okText }) => (
  <MuiModal aria-labelledby={title} aria-describedby={title} open={isOpen} onClose={close}>
    <div className="Modal_overlay">
      <Card className="Modal_card">
        <h3 className="Modal_title">{title}</h3>

        <div className="Modal_controls">
          <Button onClick={okHandler} color="secondary" variant="contained">
            {okText}
          </Button>

          <Button onClick={close} variant="contained">
            Nah
          </Button>
        </div>
      </Card>
    </div>
  </MuiModal>
)

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  okHandler: PropTypes.func.isRequired,
  okText: PropTypes.string.isRequired,
}

export default Modal
