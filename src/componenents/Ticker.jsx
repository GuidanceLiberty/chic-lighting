import React, { useEffect, useState } from 'react'

export default function Ticker() {
  const [now, setNow] = useState(new Date())
  const [location, setLocation] = useState('Locating…')

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setLocation('Geolocation not supported')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        setLocation(`Lat ${latitude.toFixed(4)}, Lon ${longitude.toFixed(4)}`)
      },
      () => setLocation('Location permission denied'),
      { enableHighAccuracy: false, timeout: 5000 }
    )
  }, [])

  const text = `🌟 Chic Lighting & Design — ${now.toLocaleString()} — 📍 ${location}`

  return (
    <div className="ticker">
      <div className="ticker-inner">
        <div className="ticker-item">{text}</div>
        <div className="ticker-item" aria-hidden>{text}</div>
      </div>
    </div>
  )
}
