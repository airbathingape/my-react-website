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
          <p className='lastCard'>Lowest Ask</p>
          <p className='last'>{props.item.price}</p>
          <p className='shoeDetails3'>Last Sale: {props.item.lastSale}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards;
