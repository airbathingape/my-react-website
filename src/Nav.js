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
          <p className='navMargin'><i class="fa-regular fa-bell"></i></p>
          <p className='ax navMargin'>Log In</p>
          <p className='ax2 navMargin'>Sign Up</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
