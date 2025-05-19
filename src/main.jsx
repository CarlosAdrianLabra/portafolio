import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Home } from './pages/Home'
import { Botones } from './components/ui/Botones'
import { TarjetaProyecto } from './components/composite/TarjetaProyecto'
import { CajaTecnologia } from './components/ui/CajaTecnologia'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TarjetaProyecto/>
  </StrictMode>,
)
