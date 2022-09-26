import './Cards.css'
import './App.css'

function Cards(props) {
  return (
    <div>
      <div className='card'>
        <img src={`../images/${props.item.imageUrl}`} alt="Off-White" className='cardPhoto' />
        <div className='container'>
          <p>{props.item.title}</p>
          <p>{props.item.colorway}</p>
          <p>Lowest Ask</p>
          <p>Price</p>
          <p className='shoeDetails'>Last Sale:</p>
        </div>
      </div>
    </div>
  )
}

export default Cards;
