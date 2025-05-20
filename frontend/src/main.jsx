import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react';

export const Context = createCotext({isAuthenticated: false});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user , setUser] = useState({});

}

return(
  <Context.Provider value={{[isAuthenticated, setIsAuthenticated}}>
    <App/>
  </Context.Provider>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
