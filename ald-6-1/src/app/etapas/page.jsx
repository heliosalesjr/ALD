
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import EtaPPDA from '../components/Etapas/EtaPPDA'
import EtaEtapas from '../components/Etapas/EtaEtapas'
import EtaDropDown from '../components/Etapas/EtaDropDown'
import EtaItens from '../components/Etapas/EtaItens'
import EtaOrg from '../components/Etapas/EtaOrg'
import EtaDica from '../components/Etapas/EtaDica'

import EtaDica2 from '../components/Etapas/EtaDica2'
import EtaButton from '../components/Etapas/EtaButton'
import EtaHero from '../components/Etapas/EtaHero'
import EtaPPDAFinal from '../components/Etapas/EtaPPDA'
import EtaDD from '../components/Etapas/EtaDD'
import Divider from "../components/Divider"
import NextNavBar from "../components/NextNavbar"

function Etapas() {
  return (
    <>
        <NextNavBar />
        <EtaHero />
        
        <EtaPPDAFinal />
        <EtaDica />
        <EtaEtapas />
        <EtaDica2 />
        <EtaDD />
        
        
        <EtaItens />
        <EtaOrg />
        <Divider />
        <EtaButton />
        <Footer />

    </>
    
  )
}

export default Etapas

