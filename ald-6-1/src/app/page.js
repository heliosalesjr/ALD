'use client'

import CardList from "./components/CardList"
import CarouselHere from "./components/CarouselHere"
import FAQ from "./components/FAQ"
import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import MyNav from "./components/MyNav"
import SectionHalf from "./components/SectionHalf"
import SectionOne from "./components/SectionOne"

export default function Home() {
  return (
    <>
      <MyNav />
      <HeroSection />
      <SectionOne />
      <CardList />
      <SectionHalf />
      <FeatureSection />
      <FAQ />
      <CarouselHere />
      <Footer />
    </>
  )
}
