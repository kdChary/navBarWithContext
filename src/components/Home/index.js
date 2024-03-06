import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const theme = isDarkTheme ? 'dark-theme' : 'light'
      const textColor = isDarkTheme ? 'dark-theme-text' : ''

      return <div className="home-container">Hello</div>
    }}
  </ThemeContext.Consumer>
)

export default Home
