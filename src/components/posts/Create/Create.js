import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, SnackbarContent } from '@material-ui/core'

import Modal from '../../common/Modal'

import './Create.scss'

const Create = ({
  title,
  setTitle,
  titleErrorMessage,

  categories,
  setCategories,
  categoriesErrorMessage,

  content,
  contentErrorMessage,
  setContent,

  save,
  errorMessage,
  isSaving,
  cancel,
  backToPosts,
  isUnsafeCancelModalOpen,
  closeUnsafeCancelModal,
  isFormEmpty,
}) => {
  const cancelButtonColor = isFormEmpty ? 'default' : 'secondary'

  return (
    <div>
      {errorMessage && <SnackbarContent message={errorMessage} />}
      <div className="CreateView_formGroup">
        <TextField
          error={!!titleErrorMessage}
          helperText={titleErrorMessage}
          value={title}
          onChange={e => setTitle(e.target.value)}
          label="Title"
          placeholder="Title"
        />
      </div>
      <div className="CreateView_formGroup">
        <TextField
          error={!!categoriesErrorMessage}
          value={categories}
          onChange={e => setCategories(e.target.value)}
          label="Categories"
          helperText={categoriesErrorMessage || 'Separate by comma'}
          placeholder="one, two, three"
        />
      </div>
      <div className="CreateView_formGroup">
        <TextField
          error={!!contentErrorMessage}
          helperText={contentErrorMessage}
          value={content}
          onChange={e => setContent(e.target.value)}
          multiline
          label="Contents"
        />
      </div>
      <div className="CreateView_formGroup CreateView_controls">
        <Button disabled={isSaving} onClick={save} color="primary" variant="contained">
          Save
        </Button>
        <Button onClick={cancel} color={cancelButtonColor} variant="contained">
          Cancel
        </Button>
      </div>

      <Modal
        title="You will lose content!"
        isOpen={isUnsafeCancelModalOpen}
        close={closeUnsafeCancelModal}
        okHandler={backToPosts}
        okText="Aha"
      />
    </div>
  )
}

Create.propTypes = {
  title: PropTypes.string.isRequired,
  titleErrorMessage: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,

  content: PropTypes.string.isRequired,
  contentErrorMessage: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,

  categories: PropTypes.string.isRequired,
  categoriesErrorMessage: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,

  save: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isSaving: PropTypes.bool.isRequired,
  cancel: PropTypes.func.isRequired,
  isUnsafeCancelModalOpen: PropTypes.bool.isRequired,
  closeUnsafeCancelModal: PropTypes.func.isRequired,
  isFormEmpty: PropTypes.bool.isRequired,
}

export default Create
