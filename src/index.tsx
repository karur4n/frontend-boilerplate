import React from 'react'
import ReactDOM from 'react-dom'
import 'minireset.css/minireset.css'
import { css } from 'linaria'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root')

  ReactDOM.render(<App />, rootEl)
})

const App: React.FC = () => {
  return (
    <div className={wrapper}>
      <p className={greeting}>Hello</p>
      <button>Primary Button</button>
    </div>
  )
}

const wrapper = css`
  margin: 16px;
`

const greeting = css`
  margin-bottom: 16px;
`
