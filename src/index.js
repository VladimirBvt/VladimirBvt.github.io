import { createRoot } from 'react-dom/client'
import './scss/index.scss'
import App from './App'
import "./js/script"

const $root = document.querySelector('#root')
const root = createRoot($root)

root.render(<App/>)
