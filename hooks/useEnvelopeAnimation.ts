import { useAnimation } from 'framer-motion'

export function useEnvelopeAnimation() {
  const controls = useAnimation()

  const handleHover = () => {
    controls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    })
  }

  const handleHoverEnd = () => {
    controls.start({
      pathLength: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    })
  }

  return { controls, handleHover, handleHoverEnd }
}

