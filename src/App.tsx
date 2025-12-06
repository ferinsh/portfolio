import { Suspense } from 'react'
import { useInView } from 'react-intersection-observer'

import VideoBackground from './components/VideoBackground'
import Header from './components/Header'
import Hero from "./components/Hero"

import './App.css'

import bgVideo from './assets/bg_video.mp4'

// const NewContent = React.lazy(() => import ('./components/NewContent'))

function App() {
  const { ref: refNewContent, inView: inViewNewContent } = useInView({ threshold: 0.1, triggerOnce: true })
  
  return (
    <>

      <VideoBackground videoSource={bgVideo}/>
      <Header />
      <Hero />
      {/* New content here */}
      <div ref = {refNewContent}>
        {inViewNewContent && (
          <Suspense fallback = {<div>Loading ...</div>}>
            {/* <NewContent /> */}
          </Suspense>
        )}
      </div>
    </>
  )
}

export default App
