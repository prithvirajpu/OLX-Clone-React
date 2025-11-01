import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'flowbite';
import { AuthProvider } from './Components/Context/Auth.jsx';
import { ItemsContextProvider } from './Components/Context/Item.jsx';



createRoot(document.getElementById('root')).render(
  <ItemsContextProvider>
  <AuthProvider>
  <StrictMode>
    <App /> 
  </StrictMode>
  </AuthProvider>
  </ItemsContextProvider>
)
