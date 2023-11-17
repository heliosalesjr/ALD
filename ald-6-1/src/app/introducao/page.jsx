'use client'
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import IntroTabela from '../components/Introducao/IntroTabela'
import IntroButons from '../components/Introducao/IntroButons'
import IntroButtonNext from '../components/Introducao/IntroButtonNext'
import IntroHero from '../components/Introducao/IntroHero'
import NextNavBar from "../components/NextNavbar"

function Introcucao() {
  return (
    <>
        
        <IntroHero />
        <IntroTabela />
        <IntroButons  />
        <IntroButtonNext />
        
    </>
    
  )
}

export default Introcucao