import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'

const Cards = () => {
  const [cards, setCards] = useState()

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/h-vieira/demo/master/db.json')
      .then((res) => res.json())
      .then((data) => setCards(data.edibles))
  }, [])

  console.log(cards)
  return (
    <div className='Cards'>
      {cards &&
        cards.map((card) => (
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={card.info.image} />
              <Card.Body>
                <Card.Title>{card.info.name}</Card.Title>
                <Card.Text>{card.info.basic_description}</Card.Text>
                <Button variant='primary'>More Info</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  )
}

export default Cards
