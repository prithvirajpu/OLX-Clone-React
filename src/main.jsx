import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'flowbite';
import 'flowbite/dist/flowbite.css';
import { AuthProvider } from './Components/Context/Auth.jsx';



createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <App /> 
  </StrictMode>
  </AuthProvider>
)
