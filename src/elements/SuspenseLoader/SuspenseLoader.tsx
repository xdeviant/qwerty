import { Suspense } from 'react'
import { Loader } from './Loader'

export const SuspenseLoader = (Component: any) => (props: any) => {
    return (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    )
}