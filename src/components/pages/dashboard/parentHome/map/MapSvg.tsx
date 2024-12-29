import L from 'leaflet'

interface MarkerColors {
  selected: string
  default: string
}

const MARKER_COLORS: MarkerColors = {
  selected: '#FF513A',
  default: '#064035',
}

export const createCustomMarker = (isSelected: boolean, number: string) => {
  const svg = `
    <svg width="48" height="64" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 0.5C11.0208 0.5 0.5 11.0208 0.5 24C0.5 32.4167 4.72917 39.8542 11.1458 44.1875L24 64L36.8542 44.1875C43.2708 39.8542 47.5 32.4167 47.5 24C47.5 11.0208 36.9792 0.5 24 0.5Z" 
        fill="${isSelected ? MARKER_COLORS.selected : MARKER_COLORS.default}"
      />
      <circle cx="24" cy="24" r="16" fill="white"/>
      <text 
        x="24" 
        y="29" 
        text-anchor="middle" 
        fill="${isSelected ? MARKER_COLORS.selected : MARKER_COLORS.default}" 
        font-size="16" 
        font-family="Arial" 
        font-weight="bold"
      >${number}</text>
    </svg>
  `

  return L.divIcon({
    className: 'custom-marker-icon',
    html: svg,
    iconSize: [48, 64],
    iconAnchor: [24, 64],
    popupAnchor: [0, -60],
  })
}
