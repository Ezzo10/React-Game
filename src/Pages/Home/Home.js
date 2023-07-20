import './Home.css'
import { Hero , MostPopuler , Game } from '../../components/index';

const Home = () => {
  return (
    <>
    <h1>Home Page</h1>
    <Hero />
     <MostPopuler />
     <Game />
    </>
  )
}

export default Home