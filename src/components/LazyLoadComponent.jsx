import React from 'react'
function LazyLoadComponent({ path }) {
    const LazyComponent = React.lazy(() => import(`./${path}`))

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </React.Suspense>
    )
}

export default LazyLoadComponent
