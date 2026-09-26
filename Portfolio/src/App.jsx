import { useState } from 'react'
import './App.css'
import Home from './assets/pages/home'
import { Projects } from './assets/pages/projects'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'projects') {
    return <Projects onBack={() => setPage('home')} />
  }

  return <Home onOpenProjects={() => setPage('projects')} />
}

export default App
