import './components/App.css'
import logo from './solar.png';
import MainContent from './components/MainContent.js'
import Cards from './components/Cards.js'
import data from './components/data'

function App() {

  const cards = data.map(item => {
    return (
      <Cards
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className='container'>
      <div class="parent">
        <div class="div1 d-flex justify-content-between">
          <div className="top"><p>Home / Sneakers / Nike / Other / Premium / <span className='underline'>Nike Air Yeezy 2 Solar Red</span></p>
            <h2>Air Yeezy 2</h2>
            <p className='shoeColor'>Solar Red</p>
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
          <MainContent />
        </div>
        <div class="div4">
          <div className='topBorder'></div>
           <div className='details'>
            Related Products
          </div>
          <div className='mainCards'>
            {cards}
          </div>
        </div>
        <div class="div5">
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
      </div>
    </div>
  );
}

export default App;
