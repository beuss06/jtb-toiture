import { useEffect, useState, useRef } from 'react'
import { useReveal } from '../hooks/useScrollReveal'
import { STATS } from '../data/siteData'

function AnimatedNumber({ value, suffix, inView }) {
  const [display, setDisplay] = useState(0)
  const animated = useRef(false)

  useEffect(() => {
    if (!inView || animated.current) return
    animated.current = true

    const duration = 2000
    const start = performance.now()

    function step(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
      else setDisplay(value)
    }

    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <span className="font-display text-[clamp(2.2rem,4vw,3rem)] font-bold leading-none">
      {display}{suffix}
    </span>
  )
}

export default function Stats() {
  const { ref, inView } = useReveal(0.3)

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-brick to-brick-dark">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="mb-1.5">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-[0.88rem] opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
