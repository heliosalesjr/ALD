
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import EtaPPDA from '../components/Etapas/EtaPPDA'
import EtaEtapas from '../components/Etapas/EtaEtapas'
import EtaDropDown from '../components/Etapas/EtaDropDown'
import EtaItens from '../components/Etapas/EtaItens'
import EtaOrg from '../components/Etapas/EtaOrg'
import EtaDica from '../components/Etapas/EtaDica'

function Etapas() {
  return (
    <>
        <MyNav />
        <EtaPPDA />
        <EtaDica />
        <EtaEtapas />
        <EtaDropDown />
        <EtaItens />
        <EtaOrg />
        <Footer />

    </>
    
  )
}

export default Etapas

