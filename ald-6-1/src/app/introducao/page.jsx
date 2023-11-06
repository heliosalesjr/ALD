'use client'
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import IntroTabela from '../components/Introducao/IntroTabela'
import IntroButons from '../components/Introducao/IntroButons'
import IntroButtonNext from '../components/Introducao/IntroButtonNext'
import IntroHero from '../components/Introducao/IntroHero'

function Introcucao() {
  return (
    <>
        <MyNav />
          <IntroHero />
          <IntroTabela />
          <IntroButons  />
          <IntroButtonNext />
        <Footer />
    
    </>
    
  )
}

export default Introcucao