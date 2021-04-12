import React, { lazy, Suspense } from 'react'

const loadable = (
  importFunc: () => Promise<any>,
  fallback?: (props: any) => JSX.Element
) => {
  const LazyComponent = lazy(importFunc)

  return (props: any) => (
    <Suspense fallback={fallback || 'Loading...'}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default loadable
