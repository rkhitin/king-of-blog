import React from 'react'
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
        okHandler={cancel}
        okText="Aha"
      />
    </div>
  )
}

export default Create
