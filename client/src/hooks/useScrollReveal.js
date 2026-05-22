import { useInView } from 'react-intersection-observer'

export function useReveal(threshold = 0.15) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '0px 0px -40px 0px',
  })

  return { ref, inView }
}
