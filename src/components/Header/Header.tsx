/* eslint-disable @next/next/no-img-element */


const Header = () => {

  return (
    <header >
      <nav className="navbar fixed-top navbar-expand-lg">
        <a className="navbar-brand" href="https://theniotech.com">
          <img src="https://theniotech.com/assets/assets/images/logo.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fas fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {/* <img src="https://theniotech.com/assets/assets/icon/settings-24x24.png" alt="Automate" /> */}
                <span>Automations</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://theniotech.com/home">
                  <img src="https://theniotech.com/assets/assets/icon/home.png" alt="Home" />
                  <span>Home</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/building">
                  <img src="https://theniotech.com/assets/assets/icon/cityscape.png" alt="Building" />
                  <span>Building</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/office">
                  <img src="https://theniotech.com/assets/assets/icon/coffee-machine.png" alt="Office" />
                  <span>Office</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/hotel">
                  <img src="https://theniotech.com/assets/assets/icon/bed.png" alt="Office" />
                  <span>Hotel</span>
                </a>

                <a className="dropdown-item" href="https://theniotech.com/industry">
                  <img src="https://theniotech.com/assets/assets/icon/industry-1.png" alt="Office" />
                  <span>Industrial</span>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://theniotech.com/About">
                {/* <img src="https://theniotech.com/assets/assets/icon/aboutus.jpg" alt="About us" />  */}
                <span>About us</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {/* <img src="https://theniotech.com/assets/assets/icon/lightning-24x24.png" alt="Products" /> */}
                <span>Concepts</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://theniotech.com/Lighting">
                  <img src="https://theniotech.com/assets/assets/icon/idea-24x24.png" alt="Niotech buspro" />
                  <span>Lighting</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/HomeSecurity">
                  <img src="https://theniotech.com/assets/assets/icon/shield-24x24.png" alt="Niotech KNX" />
                  <span>Home Security</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/InteractiveHome">
                  <img src="https://theniotech.com/assets/assets/icon/microphone-24x24.png" alt="Niotech buspro" />
                  <span>Interactive Home</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/Multimedia">
                  <img src="https://theniotech.com/assets/assets/icon/circle-1-24x24.png" alt="Niotech KNX" />
                  <span>Multimedia</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/EnergyEfficiency">
                  <img src="https://theniotech.com/assets/assets/icon/power-24x24.png" alt="Niotech buspro" />
                  <span>Energy Efficiency</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/Protection">
                  <img src="https://theniotech.com/assets/assets/icon/siren-24x24.png" alt="Niotech KNX" />
                  <span>Protection</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/Climate">
                  <img src="https://theniotech.com/assets/assets/icon/morning-snow-24x24.png" alt="Niotech KNX" />
                  <span>Climate</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/Surveillances">
                  <img src="https://theniotech.com/assets/assets/icon/security-camera-24x24.png" alt="Niotech KNX" />
                  <span>Surveillances</span>
                </a>
                <a className="dropdown-item" href="https://theniotech.com/UltraComfortLiving">
                  <img src="https://theniotech.com/assets/assets/icon/comfort-icon-png-29.jpg" alt="Niotech KNX" />
                  <span>Ultra Comfort Living</span>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://theniotech.com/Products">
                {/* <img src="https://theniotech.com/assets/assets/icon/wallet-1-24x24.png" alt="Products" />  */}
                <span>Products</span>
              </a>
              {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="product.html">
                  <img src="assets/icon/idea-24x24.png" alt="Niotech buspro" />
                  <span>Niotech buspro</span>
                </a>
                <a className="dropdown-item" href="product-single.html">
                  <img src="assets/icon/microphone-24x24.png" alt="Niotech KNX" />
                  <span>Niotech KNX</span>
                </a>
              </div>  */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://theniotech.com/Services">
                {/* <img src="https://theniotech.com/assets/assets/icon/cogwheel-24x24.png" alt="Supports" /> */}
                <span>Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://theniotech.com/Contact">
                {/* <img src="https://theniotech.com/assets/assets/icon/send.png" alt="Contact us" /> */}
                <span>Contact us</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://niotechultra.blogspot.com/" target="_blank">
                {/* <img
                  src="https://theniotech.com/assets/assets/icon/help-button-speech-bubble-with-question-mark-2-24x24.png"
                  alt="FAQ"
                /> */}
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
