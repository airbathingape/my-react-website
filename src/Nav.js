import logo from './jordan.png';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <div className="Nav-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='mt-5'>
          <h1>Daniel's Shoe Store</h1>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
