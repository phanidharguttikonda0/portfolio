"use client"

import { useEffect } from "react"

export default function V0Remover() {
  useEffect(() => {
    const removeV0Button = () => {
      const divs = document.querySelectorAll('div[id^="v0-built-with-button"]')

      divs.forEach((el) => {
        const textMatch = el.textContent?.toLowerCase().includes("built with")
        const svgLogo = el.querySelector("svg")
        const hasV0Styles =
          el.style.position === "fixed" && el.style.bottom === "24px"

        if (textMatch && hasV0Styles && svgLogo) {
          el.remove()
          console.log("💣 Removed V0 branding button")
        }
      })
    }

    removeV0Button()

    const observer = new MutationObserver(() => {
      removeV0Button()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  return null // no UI, just side effect
}
