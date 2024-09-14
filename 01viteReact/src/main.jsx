import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function HelloButton(){
  return (
    <button>Press to say hi !!</button>
  )
}

const customReactElement = {
  type: "a",
  props: {
      href : "https://www.google.com/",
      target: "_blank"
  },
  children : "This is a custom react component"
}

const evaluatedValue = "this is a evaluated value"

const reactElement = React.createElement(
  'a',
  {
    href : "https://www.google.com/",
    target: "_blank"
  },
  "this is a react element",
  evaluatedValue
)

createRoot(document.getElementById('root')).render(
  //reactElement
    // HelloButton()
  <App />
)
