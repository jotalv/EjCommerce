import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import CepPage from './pages/CepPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CepPage />
  </StrictMode>,
)
