import { useState } from 'react'
import './App.css'
import Home from './assets/pages/home'
import { ProjectDetails } from './assets/pages/ProjectDetails'
import { Projects } from './assets/pages/projects'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'projects') {
    return (
      <Projects
        onBack={() => setPage('home')}
        onOpenCaseStudy1={() => setPage('project-details')}
      />
    )
  }

  if (page === 'project-details') {
    return <ProjectDetails onBack={() => setPage('projects')} />
  }

  return <Home onOpenProjects={() => setPage('projects')} />
}

export default App
