'use client'

import FAQ from "./components/FAQ"
import HeroSection from "./components/HeroSection"
import MyNav from "./components/MyNav"

export default function Home() {
  return (
    <>
      <MyNav />
      <HeroSection />
      <FAQ />
    </>
  )
}
