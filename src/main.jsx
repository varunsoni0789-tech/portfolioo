import { createRoot } from 'react-dom/client'
import HomeP from './HomeP.jsx'
import Head from './Head.jsx'
import Skills from './Skills.jsx'
import Cirtificate from './Cirtificate.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <Head />
    <HomeP />
    <Cirtificate />
    <Projects />
    <Skills />
    <Contact />
  </div>
)