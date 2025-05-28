import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import HomePages from './pages/HomePages/HomePages'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Works from './pages/Works/Works'
import Reviews from './pages/Reviews/Reviews'
import SocialNetworks from './components/socialNetworks/socialNetworks'
import Feedback from './pages/Feedback/Feedback'

function App() {
  const [visible, setVisible] = useState(false)

  const [active, setActive] = useState(false)
  const [hide, setHide] = useState(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY < 130) {
        return setActive(false)
      }
      if (scroll < window.scrollY) {
        console.log('Показать')
        setHide(true)
      } else {
        console.log('Скрыть')
        setHide(false)
      }

      setScroll(window.scrollY)
      setActive(true)
      if (window.scrollY < 500) {
        return setHide(false)
      }

    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scroll])

  return (
    <>
      <Navigation visible={visible} setVisible={setVisible} hide={hide} active={active} />
      <HomePages />
      <AboutMe />
      <Skills />
      <Works />
      <Reviews />
      <SocialNetworks />
      <Feedback visible={visible} setVisible={setVisible} />
    </>
  )
}

export default App
