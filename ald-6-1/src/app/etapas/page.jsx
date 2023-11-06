
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import EtaPPDA from '../components/Etapas/EtaPPDA'
import EtaEtapas from '../components/Etapas/EtaEtapas'
import EtaDropDown from '../components/Etapas/EtaDropDown'
import EtaItens from '../components/Etapas/EtaItens'
import EtaOrg from '../components/Etapas/EtaOrg'
import EtaDica from '../components/Etapas/EtaDica'
import EtaPPDANovo from '../components/Etapas/EtaPPDAnovo'
import EtaDica2 from '../components/Etapas/EtaDica2'
import EtaButton from '../components/Etapas/EtaButton'
import EtaHero from '../components/Etapas/EtaHero'


function Etapas() {
  return (
    <>
        <MyNav />
        <EtaHero />
        <EtaPPDANovo />
        
        <EtaDica />
        <EtaEtapas />
        <EtaDica2 />
        <EtaDropDown />
        
        <EtaItens />
        <EtaOrg />
        <EtaButton />
        <Footer />

    </>
    
  )
}

export default Etapas

