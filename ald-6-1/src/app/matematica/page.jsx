'use client'
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import MatIntro from '../components/Matematica/MatIntro'
import MatDiferenca from '../components/Matematica/MatDiferenca'
import MatSugestao from '../components/Matematica/MatSugestao'
import MatButton from '../components/Matematica/MatButton'
import MatPropriedades from '../components/Matematica/MatPropriedades'
import MatSistemaNumeracao from '../components/Matematica/MatSistemaNumeracao'
import MatSistemaMonetario from '../components/Matematica/MatSistemaMonetario'
import MatOperacoes from '../components/Matematica/MatOperacoes'
import MatHero from '../components/Matematica/MatHero'
import Divider from '../components/Divider'
import NextNavBar from "../components/NextNavbar"

function Matematica() {
  return (
    <>
        <NextNavBar />
        <MatHero />
        <MatIntro />
        <MatDiferenca />
        <MatSugestao />
        <MatSistemaNumeracao />
        <MatSistemaMonetario />
        <MatOperacoes />
        <MatPropriedades />
        <Divider />
        <MatButton />
        <Footer />
    
    </>
    
  )
}

export default Matematica