import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { LoadingScreen } from 'src/components/loading-screen'

const Page = lazy(() => import('src/pages/page'))

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<LoadingScreen />}>
          <Page />
        </Suspense>
      ),
    },
  ])
}
