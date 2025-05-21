import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Home } from './pages/Home'
import { Botones } from './components/ui/Botones'
import { TarjetaProyecto } from './components/composite/TarjetaProyecto'
import { CajaTecnologia } from './components/ui/CajaTecnologia'
import { Form } from './components/composite/Form'
import { Navbar } from './components/layout/Navbar'
import { TarjetaExperiencia } from './components/composite/TarjetaExperiencia'
import { SobreMi } from './components/composite/SobreMi'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SobreMi/>
  </StrictMode>,
)
