import React from 'react'
import { ReactKeycloackIdProvider } from 'react-keycloak-id'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preview from './pages/Preview/Preview'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './components/Navbar'
import Progress from './pages/Progress/Progress'
import Reports from './pages/Reports/Reports'
import Insights from './pages/Insights/Insights'

const init = {
  url: process.env.REACT_APP_KEYCLOAK_URL as string,
  realm: process.env.REACT_APP_KEYCLOAK_REALM as string,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID as string,
}

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <ReactKeycloackIdProvider init={init}>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/preview" element={<Preview/>} />
            <Route path="/progress" element={<Progress/>} />
            <Route path="/reports" element={<Reports/>} />
            <Route path="/insights" element={<Insights/>} />
          </Routes>
        </React.StrictMode>
      </ReactKeycloackIdProvider>
    </BrowserRouter>
  )
}

export default App
