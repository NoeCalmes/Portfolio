// src/components/common/MagneticDiv.jsx
import React, { useRef } from 'react'

export default function MagneticDiv({
  children,
  className = '',
  strengthX = 20,   // valeur par défaut
  strengthY = 15    // valeur par défaut
}) {
  const ref = useRef(null)

  const onMove = e => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / strengthX
    const y = (e.clientY - top - height / 2) / strengthY
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate3d(0,0,0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  )
}
