import * as React from 'react'

function SvgComponent(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg width={16} height={16} viewBox='0 0 24 24' {...props}>
      <path d='M24 10H14V0h-4v10H0v4h10v10h4V14h10z' />
    </svg>
  )
}

export default SvgComponent
