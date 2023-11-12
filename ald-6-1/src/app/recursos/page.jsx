'use client'
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import RecLembre from '../components/Recursos/RecLembre'
import RecGoogle from '../components/Recursos/RecGoogle'
import RecInfografico from '../components/Recursos/RecInfografico'
import RecDicas from '../components/Recursos/RecDicas'
import RecMapaMental from '../components/Recursos/RecMapaMental'
import RecSugestao from '../components/Recursos/RecSugestao'
import RecFiqueSabendo from '../components/Recursos/RecFiqueSabendo'
import RecHero from '../components/Recursos/RecHero'
import AnotherNav from '../components/AnotherNav'
import NextNavBar from "../components/NextNavbar"

function Recursos() {
  return (
    <>
        <NextNavBar />
        <RecHero />
        <RecGoogle/>
        <RecDicas />
        <RecLembre/>
        <RecMapaMental/>
        <RecSugestao  />
        <RecFiqueSabendo />
        <RecInfografico/>
        <Footer />
    
    </>
    
  )
}

export default Recursos