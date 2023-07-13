import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'

import Root from './routes/Root.jsx'
import Error from './routes/Error.jsx'
import Destination from './routes/Destination.jsx'
import Crew from './routes/Crew.jsx'
import Technology from './routes/Technology.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "destination",
        element: <Destination />
      },
      {
        path: "crew",
        element: <Crew />
      },
      {
        path: "technology",
        element: <Technology />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)