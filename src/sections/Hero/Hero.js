import './Hero.css'
// import Slider  from '../../components/Slider/Slider.js'
import Slider from './Slider.js'
import {PrimaryBtns} from "../../components/index";

const Hero = () => {
  
  // const Slider = SliderData.map(slid => {
  //   return <Slider
  //           key={slid.id} 
  //           imgas = {slid.img} 
  //           title = {slid.title} 
  //           text ={slid.text} 
  //          /> 
  // })
  return (
   <div className='hero_main'>
       <Slider/>
          <div className='hero_text'>
            <img src="Gaming.gif" />
              <PrimaryBtns>Browse Now</PrimaryBtns>
              {/* <div className='main_button'>
  //               <a href='browse.html'>Browse Now</a>
  //           </div> */}
           </div>
        </div>
  )
}

export default Hero



