import "./MostPopuler.css";
import { Cards , SectionHeader , SectionWrapper } from "../../components/index";

import MostPoplairData from "../../Data/MostPoplairData";


const MostPopuler = () => {

const cards = MostPoplairData.map(card => {
  return <Cards
         key={card.id} 
         imgas = {card.imgas} 
         title = {card.title} 
         category = {card.category}       
         rate ={card.rate}   
         danwnlaod ={card.danwnlaod} 
         prix ={card.prix} 
         />
})
  return (
    <SectionWrapper>
        <SectionHeader>MostPopuler</SectionHeader>
        <div className="most-popular-items">
          {cards}
        </div>
    </SectionWrapper>

    
  )
}

export default MostPopuler