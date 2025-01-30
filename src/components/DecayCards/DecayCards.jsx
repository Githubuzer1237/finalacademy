import React from 'react'
import s from './DecayCards.module.scss'
import DecayCard from '../DecayCard/DecayCard'
const DecayCards = () => {
  return (
    <>
    <div className={s.cards}>
    <DecayCard width={500} height={300} image="https://friendofthesea.org/public/news/blue-ocean-28668-2560x1600.jpg">
  <h2> Добрые учителя</h2>
</DecayCard>


<DecayCard width={550} height={300} image="https://friendofthesea.org/public/news/blue-ocean-28668-2560x1600.jpg">
  <h2>Продук- <br />  тивные уроки</h2>
</DecayCard>


{/* 
<DecayCard width={200} height={300} image="https://friendofthesea.org/public/news/blue-ocean-28668-2560x1600.jpg">
  <h2>The<br/>Open Sea</h2>
</DecayCard>


<DecayCard width={200} height={300} image="https://friendofthesea.org/public/news/blue-ocean-28668-2560x1600.jpg">
  <h2>The<br/>Open Sea</h2>
</DecayCard> */}

    </div>
    </>
  )
}

export default DecayCards
