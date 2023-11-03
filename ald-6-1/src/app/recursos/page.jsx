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

function Recursos() {
  return (
    <>
        <MyNav />
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