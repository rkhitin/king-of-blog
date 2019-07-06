import React from 'react'
import { CircularProgress } from '@material-ui/core'

import './Loader.scss'

const Loader = () => (
  <div className="Loader">
    <CircularProgress value={100} />
  </div>
)

export default Loader
