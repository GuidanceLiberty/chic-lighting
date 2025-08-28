import React, { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const key = 'cl_visits'
    let current = Number(localStorage.getItem(key) || '0') + 1
    localStorage.setItem(key, String(current))
    setCount(current)
  }, [])

  return (
    <div className="visitor-chip" title="Visitor count (local device)">
      <span>👁️</span>
      <strong>{count.toLocaleString()}</strong>
      <span className="muted">visits</span>
    </div>
  )
}
