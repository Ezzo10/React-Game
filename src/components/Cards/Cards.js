import './Cards.css';
import {FaStar , FaDownload} from 'react-icons/fa'
import {ThtoisiemeBtns} from "../../components/index";

const Cards = (props) => {
  return (
    <div className="most-popular-item">
    <div className="card-wrapper">
        <img className="most-popular-item-image" src={props.imgas}/>
        <div className="most-popular-item-contet">
            <h4 className="most-popular-item-title">
                {props.title}
                <br />
                <span>{props.category}</span>
                </h4>
                <ul>
                    <li><span style={{color: 'yellow', padding:"5px"}}><FaStar/></span><span>{props.rate}</span></li>
                    <li><span style={{color: "var(--color-priamry )" , padding:"5px"}}><FaDownload/></span><span>{props.danwnlaod}</span></li>
                </ul>
        </div>
        <div className="prix">
        <p>{props.prix}$</p>
        {/* <button>{props.PrimaryBtns}</button>  */}
        <ThtoisiemeBtns>Download</ThtoisiemeBtns>

        </div>
    </div>
</div>

  )
}

export default Cards