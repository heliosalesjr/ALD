'use client'
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import AtiDiagnostico from '../components/Atividades/AtiDiagnostico'
import AtiFerramentas from '../components/Atividades/AtiFerramentas'
import AtiSugestao from '../components/Atividades/AtiSugestao'
import AtiBotaoNext from '../components/Atividades/AtiBotaoNext'
import AtiDiagnostico2 from '../components/Atividades/AtiDiagnostico2'
import AtiDica from '../components/Atividades/AtiDica'
import AtivHero from '../components/Atividades/AtivHero'
import Divider from '../components/Divider'
import NextNavBar from "../components/NextNavbar"

function Atividades() {
  return (
    <>
        <NextNavBar />
        <AtivHero />
        <AtiDiagnostico />
        <Divider / >
        <AtiFerramentas />
        <AtiDica />
        <AtiDiagnostico2 />
        <AtiSugestao />
        <AtiBotaoNext />
        <Footer />
        
    </>
    
  )
}

export default Atividades