'use client'
import LoadingSection from '@/components/common/LoadingSection'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import type { LatLngTuple } from 'leaflet'
import dynamic from 'next/dynamic'
import { memo, useMemo } from 'react'

const MapComponent = memo(function MapComponent({
  id,
  data,
  setLoading,
}: {
  id: string | null
  data: BabySitterInterface[] | BabySitterInterface
  setLoading: (loading: boolean) => void
}) {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/pages/dashboard/parentHome/map/Map'), {
        loading: () => <LoadingSection />,
        ssr: false,
      }),
    []
  )

  const initialPosition: LatLngTuple = [43.703729, -79.429567]

  return <Map id={id} data={data} posix={initialPosition} setLoading={setLoading} />
})

export default MapComponent
