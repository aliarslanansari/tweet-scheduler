import {
  ComposeIcon,
  DashboardIcon,
  PostsIcon,
  ScheduleIcon
} from '../Assets/Icons'
import { routeConfig } from '../routeConfig'

export const navigationMenuOptions = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon height={16} width={16} />,
    path: routeConfig.dashboard.path
  },
  {
    label: 'Compose',
    icon: <ComposeIcon height={16} width={16} />,
    path: routeConfig.compose.path
  },
  {
    label: 'Posts',
    icon: <PostsIcon height={16} width={16} />,
    path: routeConfig.posts.path
  },
  {
    label: 'Schedule',
    icon: <ScheduleIcon height={16} width={16} />,
    path: routeConfig.schedule.path
  }
]
