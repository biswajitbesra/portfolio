import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Contact from './components/Contact/Contact.jsx'
import Projects from './components/Projects/Projects.jsx'
import Resume from './components/Resume/Resume.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<AboutMe />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Projects />} />
            <Route path='resume' element={<Resume />} />
        </Route>
    ),
    {
        basename: "/portfolio/"
    }
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)