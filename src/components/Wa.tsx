"use client"

import { useEffect } from "react"

export default function Wa() {
    useEffect(() => {
        const message = 'Halo, saya ingin bertanya tentang layanan servis microwave atau elektronik lainnya. Apakah bisa dibantu?'
        const phoneNumber = '6285737655537'
        const encodedMessage = encodeURIComponent(message)
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
        window.location.href = waUrl
      }, [])
    return (
    <div></div>
  )
}
