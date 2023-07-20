import './Game.css'
import {CardsGame , SectionHeader , SectionWrapper } from "../../components/index";

import GameData from "../../Data/GameData";


const Game = () => {

    const cards = GameData.map(card => {
        return <CardsGame
               key={card.id} 
               imgas = {card.imgas} 
               title = {card.title} 
               category = {card.category}       
               date ={card.date}   
               hours ={card.hours}   
               danwnlaod ={card.danwnlaod} 
               />
      })
    

  return (
    <SectionWrapper>
        <SectionHeader>MostPopuler</SectionHeader>
        <div className="game-lib-cards">
         {cards}
        </div>
    </SectionWrapper>
  )
}
export default Game