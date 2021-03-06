import { RedirectTo } from './Components/RedirectTo'
import { RouteConfig } from './types'
import lazyLoader from './utils/lazyLoader'

export const routeConfig: RouteConfig = {
  dashboard: {
    render: lazyLoader(() => import('./Container/DashboardContainer')),
    path: '/dashboard',
    exact: true,
    isProtected: true
  },
  compose: {
    render: lazyLoader(() => import('./Container/ComposeContainer')),
    path: '/compose',
    exact: true,
    isProtected: true
  },
  posts: {
    render: lazyLoader(() => import('./Container/PostsContainer')),
    path: '/posts',
    exact: true,
    isProtected: true
  },
  schedule: {
    render: lazyLoader(() => import('./Container/ScheduleContainer')),
    path: '/schedule',
    exact: true,
    isProtected: true
  },
  homePage: {
    render: RedirectTo('/dashboard'),
    exact: true,
    path: '/'
  },
  notFoundPage: {
    render: lazyLoader(() => import('./Components/PageNotFound')),
    path: '/*'
  }
}
