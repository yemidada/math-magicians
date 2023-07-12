// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import '../../assets/css/navigation.css';
import Logo from '../../assets/images/logo.png';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src={Logo} alt="logo" />

        {' '}
        Math Magicians
      </div>
      <ul className="link">
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to="/"
          >
            Home
          </NavLink>

        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to="/calculator"
          >
            Calculator
          </NavLink>

        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to="/quote"
          >
            Quote
          </NavLink>

        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
