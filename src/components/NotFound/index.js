import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const theme = isDarkTheme ? 'dark-theme' : 'light'

      return (
        <div className={`not-found-container ${theme}`}>
          <NavBar />
          <div className="not-found-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h2 className="not-found-title">Lost Your Way ?</h2>
            <p className="not-found-text">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
