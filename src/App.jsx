import Button from 'core/Button'
import Login from 'auth/Login'
import Home from 'advertising/Home'

import './App.css'

function App() {
  return (
    <>
      <h1>App Container</h1>
      <div className="card">
        <h2>Load page from Advertising Service</h2>
        <Home />
      </div>

      <div className="card">
        <h2>Load component from Core Library</h2>
        <Button />
      </div>

      <div className="card">
        <h2>Load page from Auth Service</h2>
        <Login />
      </div>
    </>
  )
}

export default App
