import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const theme = isDarkTheme ? 'dark-theme' : 'light'
      const textColor = isDarkTheme ? 'dark-theme-text' : ''

      const aboutImgUrl = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

      return (
        <div className={`home-container ${theme}`}>
          <Navbar />
          <div className="home-card">
            <img src={aboutImgUrl} alt="about" className="main-icon" />
            <h1 className={`main-heading ${textColor}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
