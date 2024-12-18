import type { SVGProps } from 'react'

export function LucideCircleCheck(props: SVGProps<SVGSVGElement>) {
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
        <path d="m9 12l2 2l4-4"></path>
      </g>
    </svg>
  )
}
