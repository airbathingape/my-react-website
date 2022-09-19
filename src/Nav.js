import logo from './jordan.png';
import './Nav.css';

function Nav() {
  return (
    <nav className='nav'>
      <div className="Nav-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='m-4'>
          <h1>Daniel's Shoe Store</h1>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
