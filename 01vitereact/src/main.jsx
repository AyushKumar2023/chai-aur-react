import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom app!</h1>
    </div>
  )
}

// const reactElement={
//   type: 'a',

//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',
//   },

//   children: 'click me to visit google'
// }

const anotherElement=(
  <a href="https://www.google.com" target="_blank">visit google</a>
)

const anothername="ayush"

const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank'},
  'click me to visit google',
  anothername
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
 
  // </StrictMode>,
  // <App />
    // <MyApp />
    // anotherElement
    reactElement
  // </StrictMode>,
)
