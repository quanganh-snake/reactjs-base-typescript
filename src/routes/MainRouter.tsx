import { PATH_SYSTEM } from 'constants/path'
import AboutPage from 'pages/about'
import HomePage from 'pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function MainRouter() {
  const router = createBrowserRouter([
    {
      path: PATH_SYSTEM.HOME,
      element: <HomePage />
    },
    {
      path: PATH_SYSTEM.ABOUT,
      element: <AboutPage />
    }
  ])

  return <RouterProvider router={router} />
}

export default MainRouter
