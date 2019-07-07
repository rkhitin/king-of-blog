import React from 'react'
import { Card, Modal as MuiModal, Button } from '@material-ui/core'

import './Modal.scss'

const Modal = ({ isOpen, close, okHandler }) => (
  <MuiModal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={isOpen}
    onClose={close}
  >
    <div className="Modal_overlay">
      <Card className="Modal_card">
        <h3 className="Modal_title">Delete?</h3>

        <div className="Modal_controls">
          <Button onClick={okHandler} color="secondary" variant="contained">
            Delete!
          </Button>

          <Button onClick={close} variant="contained">
            Nah
          </Button>
        </div>
      </Card>
    </div>
  </MuiModal>
)

export default Modal
