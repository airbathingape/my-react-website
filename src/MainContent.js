import './App.css'

function MainContent() {
  return (
    <div>
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
  );
}

export default MainContent;
