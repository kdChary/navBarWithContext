import {Link} from 'react-router-dom'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      /* const theme = isDarkTheme ? 'dark-theme' : 'light' */

      const textColor = isDarkTheme ? 'dark-theme-text' : ''
      const navBg = isDarkTheme ? 'nav-dark' : ''

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={`navbar ${navBg}`}>
          <img src={websiteLogoUrl} alt="website logo" className="nav-logo" />

          <ul className="nav-options-list">
            <Link to="/" className="link-item">
              <li className={`nav-options ${textColor}`}>Home</li>
            </Link>

            <Link to="/about" className="link-item">
              <li className={`nav-options ${textColor}`}>About</li>
            </Link>
          </ul>

          <button
            className="theme-btn"
            type="button"
            data-testid="theme"
            onClick={onToggleTheme}
          >
            <img src={themeImgUrl} alt="theme" className="nav-logo" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
