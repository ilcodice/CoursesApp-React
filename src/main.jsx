import { StrictMode } from 'react'
import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './_components/ThemeContext.jsx';


createRoot(document.getElementById('root')).render(

      <BrowserRouter>

            <ThemeProvider>
                <App />
            </ThemeProvider>
      </BrowserRouter>

)
