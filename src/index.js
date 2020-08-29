import React from 'react'
import ReactDOM from 'react-dom'

import styles from "./styles.scss";
 
ReactDOM.render(
  <>
    <h1 className={styles.heading}>CSS modules with SASS</h1>
    <h2 className={styles.subheading}>Locally scoped selectors</h2>
    <p className={styles.info}>
      CSS files in which all class names and animation names are scoped locally by default.
    </p>
  </>,
  document.getElementById('root')
)
