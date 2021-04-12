interface RouteItem {
  render: (props: any) => JSX.Element
  path: string
  exact?: boolean
  isProtected?: boolean
}
interface RouteConfig {
  [key: string]: RouteItem
}
