import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { SuspenseLoader } from '../elements/SuspenseLoader/SuspenseLoader'

const Main = SuspenseLoader(lazy(() => import('../pages/Main')))

export const RouteList = () => {
    return useRoutes([
        {
            path: '/',
            element: <Main />
        }
    ])
}