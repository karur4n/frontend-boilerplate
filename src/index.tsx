import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Button } from 'antd'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root')

  ReactDOM.render(<App />, rootEl)
})

const App: React.FC = () => {
  return (
    <div>
      <p className="mb-4">Hello</p>
      <Button type="primary">Primary Button</Button>
    </div>
  )
}
