import { SvgSpinner12Dots } from '@/components/icons/SvgSpinner12Dots'

const LoadingSection = () => {
  return (
    <div className="flex h-dvh w-dvw flex-1 flex-col items-center justify-center bg-surface">
      <SvgSpinner12Dots className="size-12 opacity-80" />
    </div>
  )
}

export default LoadingSection
