import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
 
const Slider = () => {

  const data = [
    {
      id : 1,
      img : "https://blog.fr.playstation.com/tachyon/sites/10/2022/06/17beeefc8aa6008903d5f4fe83c276e6266c75fc.jpg",
      title : "Spaidr Man",
      text : "Peter Parker, alias Spider-Man (souvent écrit « Spiderman » de façon erronée1) est un super-héros évoluant dans l'univers Marvel de la maison d'édition",
    },
    {
      id : 2,
      img : "https://i.gadgets360cdn.com/large/gaming_image_hp_1643981884462.jpg",
      title : "Etre Gemar MTN",
      text : "Régnez en maître sur vos jeux avec un PC gamer monté par Materiel.net, premier fabricant de PC fixe en France. Aux performances et au design",
    },
    {
      id : 3,
      img : "https://cdn2.unrealengine.com/social-image-battlepass-3840x2160-06a5af9381de.jpg",
      title : "50%",
      text : "A tous Game action",
    },
  ]
  return (
    <Carousel autoPlay interval={4000} infiniteLoop thumbWidth={120}>
      {data.map(slide => (
        <div key={slide.id}>
          <img src={slide.img} />
          <div className='overlay'>
            <h2 className='overlay_title' >{slide.title}</h2>
            <p className='overlay_text'>{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Slider