
import ProjectBar from "./components/ProjectBar"
import VideoBackground from './components/VideoBackground'
import Header from './components/Header'
import Hero from "./components/Hero"
import About from './components/About'

import './App.css'

import bgVideo from './assets/bg_video.mp4'

function App() {
  
  return (
    <>
      <VideoBackground videoSource={bgVideo}/>
      <Header />
      <Hero />
      <ProjectBar />
      <About />
    </>
  )
}

export default App
