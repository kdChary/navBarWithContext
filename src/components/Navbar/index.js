import {Link} from 'react-router-dom'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const theme = isDarkTheme ? 'dark-theme' : 'light'

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={`navbar ${theme}`}>
          <img src={websiteLogoUrl} alt="website logo" className="nav-logo" />

          <ul className="nav-options-list">
            <Link to="/" className="link-item">
              <li className="nav-options">Home</li>
            </Link>

            <Link to="/about" className="link-item">
              <li className="nav-options">About</li>
            </Link>
          </ul>

          <img src={themeImgUrl} alt="theme icon" className="nav-logo" />
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
