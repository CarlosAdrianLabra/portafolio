import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Home } from './pages/Home'
import { Botones } from './components/ui/Botones'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Botones/>
  </StrictMode>,
)
