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

function Matematica() {
  return (
    <>
        <MyNav />
        <MatIntro />
        <MatDiferenca />
        <MatSugestao />
        <MatSistemaNumeracao />
        <MatSistemaMonetario />
        <MatOperacoes />
        <MatPropriedades />
        <MatButton />
        <Footer />
    
    </>
    
  )
}

export default Matematica