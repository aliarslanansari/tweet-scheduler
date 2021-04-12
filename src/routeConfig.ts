import PageNotFound from './Components/PageNotFound'
import ComposeContainer from './Container/ComposeContainer'
import Dashboard from './Container/DashboardContainer'
import PostsContainer from './Container/PostsContainer'
import ScheduleContainer from './Container/ScheduleContainer'

export const routeConfig: RouteConfig = {
  dashboard: {
    render: Dashboard,
    path: '/dashboard',
    exact: true,
    isProtected: true
  },
  compose: {
    render: ComposeContainer,
    path: '/compose',
    exact: true,
    isProtected: true
  },
  posts: {
    render: PostsContainer,
    path: '/posts',
    exact: true,
    isProtected: true
  },
  schedule: {
    render: ScheduleContainer,
    path: '/schedule',
    exact: true,
    isProtected: true
  },
  notFoundPage: {
    render: PageNotFound,
    path: '/*'
  }
}
