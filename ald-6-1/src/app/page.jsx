'use client'
import CardList from "./components/CardList"
import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import MyNav from "./components/MyNav"
import SectionHalf from "./components/SectionHalf"
import SectionOne from "./components/SectionOne"
import FAQDaisy from './components/FAQDaisy'
import Divider from "./components/Divider"
import BaixeLivros from "./components/BaixeLivros"
import MainButton from "./components/MainButton"
import MainProposta from "./components/MainProposta"
import AnotherNav from "./components/AnotherNav"
import NextNavbar from "./components/NextNavbar"


export default function Home() {
  return (
    <>
      <NextNavbar />
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
