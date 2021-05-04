
import React, {useState, useEffect} from "react"

const Cards = () => {

  const [cards, setCards] = useState()

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/h-vieira/demo/master/db.json")
      .then((res) => res.json())
      .then((data) => setCards(data.edibles));
  }, []);

  console.log(cards)
  return(
    <div className= "Cards">
      {cards && cards.map(card => 
        <div>
          <img src={card.info.image} alt={card.info.name} style={{width: 50}} />
          <p>{card.info.name}</p>
          <p>{card.info.basic_description}</p>
          <button>more details</button>
        </div>)}
    </div>
  )
}




export default Cards
