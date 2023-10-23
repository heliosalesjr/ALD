
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import EtaPPDA from '../components/Etapas/EtaPPDA'
import EtaEtapas from '../components/Etapas/EtaEtapas'
import EtaDropDown from '../components/Etapas/EtaDropDown'
import EtaItens from '../components/Etapas/EtaItens'

function Etapas() {
  return (
    <>
        <MyNav />
        <EtaPPDA />
        <EtaEtapas />
        <EtaDropDown />
        <EtaItens />
        <Footer />
    
    </>
    
  )
}

export default Etapas

