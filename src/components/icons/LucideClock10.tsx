import type { SVGProps } from 'react'

export function LucideClock10(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <circle cx={12} cy={12} r={10}></circle>
        <path d="M12 6v6l-4-2"></path>
      </g>
    </svg>
  )
}
