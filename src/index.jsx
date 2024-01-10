import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const root = createRoot(document.querySelector('#root'))

root.render(
    <App>
        
        <img src="/comic_1.png" />
    </App>
)