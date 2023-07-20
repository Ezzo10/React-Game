import "./Header.css"
import React, {useState} from "react";
import {Link} from "react-router-dom"
import { AiFillShop } from "react-icons/ai";  import logo from "../../assets/imags/logo.png"
import NavItem , {NavItemDropdown} from "../../components/NavItem/NavItem"
 const Header = () => {
  const [active, setActive] = useState("nav_menu");
  const navToggele = () => {
    active === "nav_menu" ?
    setActive("nav_menu nav_active") : 
    setActive("nav_menu");
  }
  return (
  //   <nav className="navbar navbar-expand-lg navbar cyborg-navbar">
  //   <div className="container-fluid">
  //     <Link to="/"className="nav-link col active" aria-current="page"><img src={logo}/></Link>

  //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse navvv" id="navbarNavDropdown">
  //       <ul className="navbar-nav">
  //         <NavItem>
  //           <Link to="/"className="nav-link col active" aria-current="page">Home</Link>
  //           {/* <a  href="/">Home</a> */}
  //         </NavItem>
  //         <NavItem>
  //           <Link to="Profile" className="nav-link col" href="Profile">SHOP</Link>
  //           {/* <a >SHOP</a> */}
  //         </NavItem>
  //         <NavItem>
  //           <Link to="March" className="nav-link col" href="March">March</Link>
  //         </NavItem>
  //         <li className="nav-item dropdown">
  //           <a className="nav-link col col dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //            GAME
  //           </a>
  //           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
  //             <li><NavItemDropdown>Action</NavItemDropdown></li>
  //             <li><NavItemDropdown>Another action</NavItemDropdown></li>
  //             <li><NavItemDropdown>Something else here</NavItemDropdown></li>
  //           </ul>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
    <nav className="nav">
      <Link to="/"className="brand" aria-current="page"><img src={logo}/></Link>
      <ul className={active}>
        <NavItem>
            <Link to="/"className="nav_item" aria-current="page"><il className="nav_item"><a href="#">Home</a></il></Link>
            {/* <a  href="/">Home</a> */}
          </NavItem>

        <NavItem>
           <Link to="Profile" className="nav_item" href="Profile"><il className="nav_item"><a href="#">SHOP</a></il></Link>
           {/* <a >SHOP</a> */}
        </NavItem>

        <NavItem>
               <Link to="March" className="nav_item" href="March"><il className="nav_item"><a href="#">March</a></il></Link>
        </NavItem>

         <NavItem>
               <Link to="Contacte" className="nav_item" href="Contacte"><il className="nav_item"><a href="#">Contacte</a></il></Link>
        </NavItem>
      </ul>
      <div onClick={navToggele} className="nav_toggler">
        <div className="line1 link"></div>
        <div className="line2 link"></div>
        <div className="line3 link"></div>
      </div>
    </nav>
  )
}
export default Header
