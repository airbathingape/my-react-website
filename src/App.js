import './App.css'
import logo from './solar.png';

function App() {
  return (
    <div className='container'>
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
          <div className="navBorder">
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
            <div className="bids">
              <div className="place"><strong>Place bid</strong></div>
              <div className="buy"><strong>Buy for ¥1,486,700</strong></div>
            </div>
            <div className="priceBorder"></div>
            <div className="ask">
              <strong><p>Sell for ¥940,400 or Ask for More</p></strong>
            </div>
          </div>
          <div className="lastSale">
            <div className="sale">
              <p>Last Sale:</p>
            </div>
            <div className="mainPrice d-flex">
              <div className="last">
                <p>¥970,800</p>
              </div>
              <div className="boxes">
                <div className="ax">View Asks</div>
                <div className="ax">View Bids</div>
                <div className="ax">View Sales</div>
              </div>
            </div>
            <div className="percent">
              <p>▲ ¥29,600 (3.1%)</p>
            </div>
          </div>
        </div>
        <div class="div4">
        <div className='bottomBorder'></div>
          <div className="details">
            Product Details
          </div>
          <div className='d-flex'>
            <div className="mainDetails">
              <p>Style</p>
              <p>Colorway</p>
              <p>Retail Price</p>
              <p>Release Date</p>
            </div>
            <div className="subDetails">
              <p>508214-006</p>
              <p>BLACK/BLACK-SOLAR RED</p>
              <p>$250</p>
              <p>06/09/2012</p>
            </div>
          </div>
        </div>
        <div class="div5"> </div>
      </div>
    </div>
  );
}

export default App;
