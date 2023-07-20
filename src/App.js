import {BrowserRouter as  Router ,Routes, Route,} from 'react-router-dom';
import {Header , Footer , Container } from './components/index';
import {Home , Profile , March , Contacter} from './Pages/index'
import './App.css';
const App = () => {
    return (
        <>
        <div>
           <Router>
           <Header text ="New Header" color="#fff"/>
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='Profile' element={<Profile />}/>                
                    <Route path='March' element={<March />}/>                
                    <Route path='Contacter' element={<Contacter />}/>                
                </Routes>
            </Container>
            <Footer />
           </Router>
        </div>
        </>
    )
}

export default App

