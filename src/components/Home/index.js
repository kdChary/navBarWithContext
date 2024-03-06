import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const theme = isDarkTheme ? 'dark-theme' : 'light'
      const textColor = isDarkTheme ? 'dark-theme-text' : ''

      const homeImgUrl = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

      return (
        <div className={`home-container ${theme}`}>
          <Navbar />
          <div className="home-card">
            <img src={homeImgUrl} alt="home icon" className="main-icon" />
            <h1 className={`main-heading ${textColor}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
