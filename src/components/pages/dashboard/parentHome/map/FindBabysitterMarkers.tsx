import type { LatLng, Map } from 'leaflet'
import { useEffect } from 'react'
import { Marker, Popup } from 'react-leaflet'

import { createCustomMarker } from '@/components/pages/dashboard/parentHome/map/MapSvg'
import type { I18nLocale } from '@/i18n/i18n-configs'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'

interface MarkersProps {
  data?: BabySitterInterface[] | BabySitterInterface
  locale: I18nLocale
  selectedId: number | null
  mapRef: React.MutableRefObject<Map | null>
}

export function Markers({ data, locale, selectedId, mapRef }: MarkersProps) {
  useEffect(() => {
    if (selectedId && data && mapRef.current) {
      let selectedBabySitter

      if (Array.isArray(data)) {
        selectedBabySitter = data.find((babysitter) => babysitter.id === selectedId)
      } else {
        selectedBabySitter = data.id === selectedId ? data : null
      }

      if (selectedBabySitter) {
        mapRef.current.flyTo(selectedBabySitter.location as LatLng, mapRef.current.getZoom())
      }
    }
  }, [selectedId, data, mapRef])

  if (!data) return null

  const markers = Array.isArray(data) ? data : [data]

  return (
    <>
      {markers.map((babySitter, index) => {
        return (
          <Marker
            key={babySitter.id || index}
            position={babySitter.location!}
            icon={createCustomMarker(babySitter.id == selectedId, `${index + 1}`)}
          >
            <Popup>
              <div className="text-sm">
                <p className="mb-1 font-semibold">{babySitter.name[locale]}</p>
                <p className="text-gray-600">
                  {babySitter.location && babySitter.location.lat.toFixed(4)},{' '}
                  {babySitter.location && babySitter.location.lng.toFixed(4)}
                </p>
              </div>
            </Popup>
          </Marker>
        )
      })}
    </>
  )
}
