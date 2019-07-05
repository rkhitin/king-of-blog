import React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'

import './Create.scss'

const CreateView = ({
  title,
  titleErrorMessage,
  categories,
  content,
  contentErrorMessage,
  setTitle,
  setCategories,
  setContent,
  save,
}) => (
  <div>
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
        value={categories}
        onChange={e => setCategories(e.target.value)}
        label="Categories"
        helperText="Separate by comma"
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
      <Button variant="contained" onClick={save}>
        Save
      </Button>
      <Link to="/">
        <Button variant="contained">Cancel</Button>
      </Link>
    </div>
  </div>
)

export default CreateView
