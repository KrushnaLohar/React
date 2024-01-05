import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// router bana sikhte hai
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'About',
//         element: <About />
//       },
//       {
//         path: 'Contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

// 2nd mthd
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='User/:userid' element={<User/>}/>
      <Route 
        loader={githubInfoLoader}
        path='Github' 
        element={<Github/>}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* router provider is must if we want to use react router dom */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
