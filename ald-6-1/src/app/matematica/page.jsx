'use client'
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import MatIntro from '../components/Matematica/MatIntro'
import MatDiferenca from '../components/Matematica/MatDiferenca'
import MatSugestao from '../components/Matematica/MatSugestao'

function Matematica() {
  return (
    <>
        <MyNav />
        <MatIntro />
        <MatDiferenca />
        <MatSugestao />
        <Footer />
    
    </>
    
  )
}

export default Matematica