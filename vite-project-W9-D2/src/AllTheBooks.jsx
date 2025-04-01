import { Component } from "react"
import fantasy from "./books/fantasy.json"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
class AllTheBooks extends Component {
  render() {
    return (
      <>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {fantasy.map((libro) => {
            return (
              <Card
                style={{
                  width: "18rem",
                  display: "flex",
                  flexDirection: "column",
                }}
                key={libro.asin}
                className=" card-hover"
              >
                <Card.Img variant="top" src={libro.img} />
                <Card.Body className="d-flex flex-column flex-grow-1">
                  <Card.Title className="flex-grow-1">{libro.title}</Card.Title>
                  <Card.Text>{libro.category}</Card.Text>

                  <Button variant="primary">Buy for {libro.price}</Button>
                </Card.Body>
              </Card>
            )
          })}
        </div>
      </>
    )
  }
}

export default AllTheBooks
