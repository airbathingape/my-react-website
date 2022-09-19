import logo from './jordan.png';
import './Nav.css';

function Nav() {
  return (
    <nav className='nav'>
      <div className="Nav-header">
        <div class="main">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Search for brand, color, etc." />
          </div>
        </div>
        <div className='d-flex navFont'>
          <p className='navMargin'>Browse</p>
          <p className='navMargin'>News</p>
          <p className='navMargin'>About</p>
          <p className='navMargin'>Help</p>
          <p className='navMargin'>Sell</p>
          <p className='navMargin'>bell</p>
          <p className='ax navMargin'>Log In</p>
          <p className='ax navMargin'>Sign Up</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
