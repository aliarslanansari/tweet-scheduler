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
    icon: DashboardIcon,
    path: routeConfig.dashboard.path
  },
  {
    label: 'Compose',
    icon: ComposeIcon,
    path: routeConfig.compose.path
  },
  {
    label: 'Posts',
    icon: PostsIcon,
    path: routeConfig.posts.path
  },
  {
    label: 'Schedule',
    icon: ScheduleIcon,
    path: routeConfig.schedule.path
  }
]
