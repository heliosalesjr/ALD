'use client'

import CardList from "./components/CardList"
import CarouselHere from "./components/CarouselHere"
//import FAQ from "./components/FAQ"
import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import MyNav from "./components/MyNav"
import SectionHalf from "./components/SectionHalf"
import SectionOne from "./components/SectionOne"
//import EtaDropDown from './components/Etapas/EtaDropDown'
import FAQDaisy from './components/FAQDaisy'
import Divider from "./components/Divider"
import BaixeLivros from "./components/BaixeLivros"
import MainButton from "./components/MainButton"
import MainProposta from "./components/MainProposta"


export default function Home() {
  return (
    <>
      <MyNav />
      <HeroSection />
      <SectionOne />
      <Divider />
      <CardList />
      <Divider />
      <SectionHalf />
      <Divider />
      <FeatureSection />
      
      <FAQDaisy />
      <Divider />
      <BaixeLivros  />
      
      <MainProposta />
      <Divider />
      <MainButton />
      <Footer />
    </>
  )
}
