import './Cards.css'

function Cards(props) {
  return (
    <div>
      <img src={`../images/${props.item.imageUrl}`} alt="Off-White" />
      <p>{props.item.title}</p>
      <p>{props.item.colorway}</p>
    </div>
  )
}

export default Cards;
