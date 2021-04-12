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
    icon: <DashboardIcon height={18} width={18} />,
    path: routeConfig.dashboard.path
  },
  {
    label: 'Compose',
    icon: <ComposeIcon height={18} width={18} />,
    path: routeConfig.compose.path
  },
  {
    label: 'Posts',
    icon: <PostsIcon height={18} width={18} />,
    path: routeConfig.posts.path
  },
  {
    label: 'Schedule',
    icon: <ScheduleIcon height={18} width={18} />,
    path: routeConfig.schedule.path
  }
]
