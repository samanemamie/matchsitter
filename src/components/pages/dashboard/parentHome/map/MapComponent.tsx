'use client'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import type { LatLngTuple } from 'leaflet'
import dynamic from 'next/dynamic'
import { memo, useMemo } from 'react'

const MapComponent = memo(function MapComponent({
  id,
  data,
}: {
  id: number | null
  data: BabySitterInterface[] | BabySitterInterface
}) {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/pages/dashboard/parentHome/map/Map'), {
        loading: () => <p>Loading...</p>,
        ssr: false,
      }),
    []
  )

  const initialPosition: LatLngTuple = [43.703729, -79.429567]

  return <Map id={id} data={data} posix={initialPosition} />
})

export default MapComponent
