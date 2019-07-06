import React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button, SnackbarContent } from '@material-ui/core'

import './Create.scss'

const Create = ({
  title,
  titleErrorMessage,
  categories,
  categoriesErrorMessage,
  content,
  contentErrorMessage,
  setTitle,
  setCategories,
  setContent,
  save,
  errorMessage,
  isSaving,
}) => (
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
      <Button disabled={isSaving} variant="contained" onClick={save}>
        Save
      </Button>
      <Link to="/">
        <Button variant="contained">Cancel</Button>
      </Link>
    </div>
  </div>
)

export default Create
