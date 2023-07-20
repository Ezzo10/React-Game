import "./CardsGame.css"
import {SecondarBtns} from "../../components/index";

const CardsGame = (props) => {
  return (
    <div className="game-lib-card">
        <ul>
        <li><img src={props.imgas}/></li>
        <li><h4>{props.title}</h4><span>{props.category}</span></li>
        <li><h4>Date Add</h4><span>{props.date}</span></li>
        <li><h4>Hours Played</h4><span>{props.hours}</span></li>
        <li><h4>Current</h4><span>{props.download}</span></li>
        <SecondarBtns>Download</SecondarBtns>
        </ul>
    </div>
  )
}

export default CardsGame