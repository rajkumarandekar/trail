import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <ul className="header-list-items">
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <div className="text">
          <Link to="/" className="link-item">
            <li className="home-heading home">Home</li>
          </Link>
          <Link to="/jobs" className="link-item">
            <li className="jon-heading home">Jobs</li>
          </Link>
          <Link to="/">
            <li>.</li>
          </Link>
        </div>
      </ul>

      <div>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
