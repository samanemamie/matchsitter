import type { LatLngExpression, LatLngTuple } from 'leaflet'
import L from 'leaflet'
import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import { Markers } from '@/components/pages/dashboard/parentHome/map/FindBabysitterMarkers'
import { useLocaleWithProps } from '@/i18n/i18n-configs'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  posix: LatLngExpression | LatLngTuple
  zoom?: number
  data?: BabySitterInterface[] | BabySitterInterface
  id: number | null
  setLoading: (loading: boolean) => void
}

export default function Map({ setLoading, id, data, zoom = 13, posix }: MapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const { locale } = useLocaleWithProps()

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
      const container = L.DomUtil.get('map')
      if (container) {
        L.DomUtil.remove(container)
      }
    }
  }, [])

  return (
    <MapContainer
      id={`map-${id ?? 'default'}`}
      center={posix}
      zoom={zoom}
      className="!z-0 rounded-150"
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
      dragging={true}
      ref={mapRef}
      whenReady={() => setLoading(false)}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers data={data} locale={locale} selectedId={id} mapRef={mapRef} />
    </MapContainer>
  )
}
