import './App.css'

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
      <div class="div2"> </div>
      <div class="div3"> </div>
      <div class="div4"> </div>
      <div class="div5"> </div>
    </div>
  );
}

export default App;
