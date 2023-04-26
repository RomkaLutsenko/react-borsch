import React from 'react'
import ContentLoader from 'react-content-loader'

export const BorschSkeleton = () => (
    <ContentLoader
        className="borsch-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="134" cy="134" r="125" />
        <rect x="0" y="280" rx="10" ry="10" width="280" height="20" />
        <rect x="0" y="325" rx="10" ry="10" width="280" height="109" />
        <rect x="0" y="425" rx="10" ry="10" width="95" height="30" />
        <rect x="125" y="425" rx="10" ry="10" width="150" height="40" />
    </ContentLoader>
)
