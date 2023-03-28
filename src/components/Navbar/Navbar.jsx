import "./Navbar.css";
import { Link } from "react-router-dom";
import Main from "./nav";
import work from "../../images/work.png"
const Navbar = () => {
  
  return (
    <>
      <Main />
      <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <header id="header" className="fixed-top ">
        <div className="container-fluid  navbur">
          <div className="navi">
            <div className="col-xl-12 d-flex align-items-center lefty">
              <h5 className="ld-flex mr-auto devman">
                <img
                  src="https://code.google.com/images/developers.png"
                  alt=""
                />
                Developer   <span className="blink"> _</span>
              </h5>
              <nav className="nav-menu  mainMenu">
                <ul>
                  <li
                    className="active"
                    data-aos="fade-down"
                    data-aos-duration="300"
                  >
                    <a href="#home"> Home</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="600">
                    <a href="#about">About</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="900">
                    <a href="#services">Knowledge</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1200">
                    <a href="#skills">Skills</a>
                  </li>

                  <li data-aos="fade-down" data-aos-duration="1500">
                    <a href="#work">My Work</a>
                  </li>

                  <li data-aos="fade-down" data-aos-duration="1800">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="nav-social">
               <a href="https://github.com/rahuliitbhu"> <i className="fa fa-github"></i></a>
              </div>
              <div className="left-btns">
                <div class=" " id="theme-button2">
                  <input id="toggle" class="toggle" type="checkbox"></input>
                </div>
             
                <div className=" " id="theme-button">
                  <Link to="#" class="menuBtn">
                    <span class="lines"></span>
                  </Link>
                </div>
              </div>
              
              <div>
                <a href={process.env.REACT_APP_PROFILE}>  
                <img
                  className="round-image" 
        src={process.env.REACT_APP_PROFILE}
        alt="Logo"
        
      /></a>
    
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
