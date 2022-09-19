import './App.css'
import logo from './solar.png';

function App() {
  return (
    <div class="parent">
      <div class="div1 d-flex justify-content-between">
        <div className="top"><p>
          Home / Sneakers / Nike / Other / Premium / <span className='underline'>Nike Air Yeezy 2 Solar Red</span>
        </p>
          <h2>Air Yeezy 2</h2>
          <h3>Solar Red</h3>
          <div className='d-flex'>
            <p className='shoeDetails'>Verified Authentic</p>
            <p className='shoeDetails2'>Condition: New</p>
          </div>
        </div>
        <div className="icons d-flex flex-column-row">
          <i class="fa-solid fa-circle-plus"></i>
          <i class="fa-solid fa-heart iconMargin"></i>
          <i class="fa-solid fa-arrow-right-from-bracket iconMargin"></i>
        </div>
      </div>
      <div class="div2">
        <img src={logo} className="yeezy" alt='pic' />
      </div>
      <div class="div3">
        <div className="navbar">
          <select class="form-select" aria-label="Default select example">
            <option selected>Size:</option>
            <option value="1">
              <p>US M 7 ¥2,513,700</p>
            </option>
            <option value="2">
              <p>US M 8 ¥2,746,900</p>
            </option>
            <option value="3">
              <p>US M 9 ¥1,953,100</p>
            </option>
          </select>
        </div>
        <div className="bids d-flex">
          <div className="place">Place bid</div>
          <div className="buy">Buy for</div>
        </div>
        <div className="ask">
          <p>sell for 940,400 or more</p>
        </div>
      </div>
      <div class="div4"> </div>
      <div class="div5"> </div>
    </div>
  );
}

export default App;
